import Firebase from 'firebase/app';
// import { isAdminUser } from '../firestore/user';

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
        resolve(userCredential);
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

export function getCurrentUser() {
  // Todo: current user
  return new Promise((resolve, reject) => {
    const unsubscribe = Firebase.auth().onAuthStateChanged((user) => {
      unsubscribe();
      resolve(user);
    }, (error) => {
      reject(error);
    });
  });
}
