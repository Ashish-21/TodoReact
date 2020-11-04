import firebase from "firebase";

const firebaseInit = firebase.initializeApp({
	// For Firebase JS SDK v7.20.0
});

const db = firebaseInit.firestore();
export default db;
