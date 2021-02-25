import Firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

import FirebaseConfig from '../../../firebaseConfig';

Firebase.initializeApp(FirebaseConfig);

Firebase.getCurrentUser = () => new Promise((resolve, reject) => {
  const unsubscribe = Firebase.auth().onAuthStateChanged((user) => {
    unsubscribe();
    resolve(user);
  }, (error) => {
    reject(error);
  });
});
