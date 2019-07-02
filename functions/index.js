const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccount.json');
const axios = require('axios');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://not-wrong-doorman.firebaseio.com'
});

const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({ origin: true }));

exports.fetchInvite = functions.pubsub.schedule('every 30 minutes').onRun(context => {
  app.post('/', async (req, res) => {
    const id = req.body.id;
    try {
      const invites = await axios.get(
        `https://api.github.com/user/repository_invitations`,
        {
          headers: {
            Authorization: id
          }
        }
      );
      return res.send(invites);
    } catch (err) {
      console.error(res.send({ code: err.code, message: err.message }));
    }
  });
});

exports.invites = functions.https.onRequest(app);
