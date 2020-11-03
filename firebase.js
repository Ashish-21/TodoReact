import firebase from "firebase";

const firebaseInit = firebase.initializeApp({
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional{
	apiKey: "AIzaSyD-7hrpzhC83fiecTWQ_KhoNvj7LAtMMe8",
	authDomain: "todo-app-cp-ea611.firebaseapp.com",
	databaseURL: "https://todo-app-cp-ea611.firebaseio.com",
	projectId: "todo-app-cp-ea611",
	storageBucket: "todo-app-cp-ea611.appspot.com",
	messagingSenderId: "631365953994",
	appId: "1:631365953994:web:063fdcab6324adf203c733",
	measurementId: "G-QP7FQXQHVQ",
});

const db = firebaseInit.firestore();
export default db;
