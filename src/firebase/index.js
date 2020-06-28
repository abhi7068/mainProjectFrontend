import firebase from 'firebase/app';
import 'firebase/storage';
var firebaseConfig = {
  apiKey: 'AIzaSyAMkKqywZepiEkpsv-ZnrVyvb1c-Jx7-Q8',
  authDomain: 'yoyo-app-6dc33.firebaseapp.com',
  databaseURL: 'https://yoyo-app-6dc33.firebaseio.com',
  projectId: 'yoyo-app-6dc33',
  storageBucket: 'yoyo-app-6dc33.appspot.com',
  messagingSenderId: '534709043692',
  appId: '1:534709043692:web:9734ef3eba87770b0e00c9',
  measurementId: 'G-4X8M4MVQJR'
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export { storage, firebase as default };
