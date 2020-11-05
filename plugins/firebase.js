import firebase from "firebase"

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "貼り付け",
    authDomain: "貼り付け",
    databaseURL: "貼り付け",
    projectId: "貼り付け",
    storageBucket: "貼り付け",
    messagingSenderId: "貼り付け",
    appId: "貼り付け",
    measurementId: "貼り付け"
  })
}

export default firebase