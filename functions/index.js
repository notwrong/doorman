const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://not-wrong-doorman.firebaseio.com'
});

const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors({ origin: true }));

app.get('/api/auth', async (req, res) => {
  if (!req.headers.authorization) {
    return res
      .status(401)
      .json({ message: 'Bad or missing credentials.  Please authorize the request.' });
  } else {
    try {
      const user = await admin.auth().verifyIdToken(req.headers.authorization);
      return res.status(200).json(user);
    } catch (err) {
      return res.status(500).json({ code: err.code, message: err.message });
    }
  }
});
const sendAllow = [];
const sendBlock = [];

app.post('/api/invites', async (req, res) => {
  const token = req.body.user.creds.accessToken;
  const { allow, block } = req.body.user;
  let allowKeys = Object.keys(allow);
  allowKeys = allowKeys.map(key => parseInt(key));
  let blockKeys = Object.keys(block);
  blockKeys = blockKeys.map(key => parseInt(key));
  axios.defaults.headers.common['Authorization'] = `token ${token}`;
  try {
    const inviteFetch = await axios.get(
      'https://api.github.com/user/repository_invitations',
      {
        headers: {
          Authorization: `token ${token}`
        }
      }
    );
    console.log(token);
    const invites = inviteFetch.data;
    for (let i = 0; i < invites.length; i++) {
      if (allowKeys.includes(invites[i].repository.owner.id)) {
        sendAllow.push(invites[i]);
      } else if (blockKeys.includes(invites[i].repository.owner.id)) {
        sendBlock.push(invites[i]);
      }
    }

    if (sendAllow.length === 0 && sendBlock.length === 0) {
      res.send({ message: 'No pending invites.' });
      return null;
    }

    if (sendAllow.length > 0) {
      for (let i = 0; i < sendAllow.length; i++) {
        await axios.patch(`${sendAllow[i].url}`);
      }
    }

    if (sendBlock.length > 0) {
      for (let i = 0; i < sendBlock.length; i++) {
        await axios.delete(`${sendBlock[i].url}`);
      }
    }

    res.send('All invites have been either approved or rejected based on user settings.');
  } catch (err) {
    console.error(err);
  }
});
exports.server = functions.https.onRequest(app);
