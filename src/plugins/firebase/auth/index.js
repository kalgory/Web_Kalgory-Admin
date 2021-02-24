import Firebase from 'firebase/app';
import { isAdminUser } from '../firestore/user';
// eslint-disable-next-line no-shadow
export function onAuthStateChanged(onAuthStateChanged) {
  Firebase.auth().onAuthStateChanged((user) => {
    console.log('auth state changed');
    onAuthStateChanged(user);
  });
}

export function signInWithEmailAndPassword(email, password) {
  return new Promise((resolve, reject) => {
    Firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        isAdminUser(userCredential.user.uid).then((isAdmin) => {
          if (!isAdmin) {
            Firebase.auth().signOut().then(() => {
              reject(Error('Not Authorized'));
            });
          } else {
            resolve(userCredential);
          }
        })
          .catch((error) => {
            reject(error);
          });
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function signOut() {
  return new Promise((resolve, reject) => {
    Firebase.auth().signOut()
      .then(() => {
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
}
