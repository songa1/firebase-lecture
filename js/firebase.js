
const firebaseConfig = {
    apiKey: "AIzaSyCXw8V-GUWdF0FV0Wdy05luIPonSwvxXs0",
    authDomain: "fb-session.firebaseapp.com",
    projectId: "fb-session",
    storageBucket: "fb-session.appspot.com",
    messagingSenderId: "872691679251",
    appId: "1:872691679251:web:8501737610926299287fe6"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const auth = firebase.auth();

