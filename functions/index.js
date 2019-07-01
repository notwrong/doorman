const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccount.json');
const functions = require('firebase-functions');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://not-wrong-doorman.firebaseio.com'
});

exports.myroute = functions.https.onRequest((req, res) => {
  res.status(200).json({ message: "I'm alive!!!!" });
});
