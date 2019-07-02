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

app.post('/', (req, res) => {
  const currentUser = req.body.currentUser;
  functions.pubsub.schedule('every 30 minutes').onRun(context => {
    const url = 'https://api.github.com/user/repository_invitations';
    const options = {
      headers: {
        Authorization: currentUser.creds.accessToken
      }
    };
    axios.get(url, options);
  });
});

exports.invites = functions.https.onRequest(app);
