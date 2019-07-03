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

app.post('/api/invites', async (req, res) => {
  const token = req.body.token;
  try {
    const inviteFetch = await axios.get(
      'https://api.github.com/user/repository_invitations',
      {
        headers: {
          Authorization: `token ${token}`
        }
      }
    );
    res.send(inviteFetch.data);
  } catch (err) {
    res.send({ code: err.code, message: err.message });
  }
});

exports.server = functions.https.onRequest(app);
