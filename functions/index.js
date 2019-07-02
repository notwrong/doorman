const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://not-wrong-doorman.firebaseio.com'
});

const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({ origin: true }));

app.get('/auth', async (req, res) => {
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

exports.server = functions.https.onRequest(app);
