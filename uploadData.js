const firestoreService = require('firestore-export-import');
const serviceAccount = require('./worldquarantine2020-firebase-adminsdk-9idz9-047d0b7b6c.json');

const dataBaseUrl ="https://worldquarantine2020.firebaseio.com";

firestoreService.initializeApp(serviceAccount, dataBaseUrl);
firestoreService.restore("data-coronavirus.json");