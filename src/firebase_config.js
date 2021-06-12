import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyAHOOxQd3UWVPLNQfLH6GZggcPQwUNfILg',
  authDomain: 'todoapp-7fd3b.firebaseapp.com',
  projectId: 'todoapp-7fd3b',
  storageBucket: 'todoapp-7fd3b.appspot.com',
  messagingSenderId: '194708960341',
  appId: '1:194708960341:web:516bb886ee69149e2690dc',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
