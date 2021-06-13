import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAa5awIAULqH6dz7vtJGm8YKtNLCvwEmBo",
  authDomain: "contactapp-ae16b.firebaseapp.com",
  projectId: "contactapp-ae16b",
  storageBucket: "contactapp-ae16b.appspot.com",
  messagingSenderId: "1017734651721",
  appId: "1:1017734651721:web:cbc2a810bc142a05c40498"
};

firebase.initializeApp(firebaseConfig);

export default firebase;