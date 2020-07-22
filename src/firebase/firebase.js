import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDrwMrMXN2xOjmeTM1FGMAVoHQ8mdQ9nzQ",
    authDomain: "expensify-2c0e1.firebaseapp.com",
    databaseURL: "https://expensify-2c0e1.firebaseio.com",
    projectId: "expensify-2c0e1",
    storageBucket: "expensify-2c0e1.appspot.com",
    messagingSenderId: "919255393950",
    appId: "1:919255393950:web:1bcb57e8d8d270d72c7d8f",
    measurementId: "G-V7TSVCG127"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();


