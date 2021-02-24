import Firebase from 'firebase/app';

export function isAdminUser(userUID) {
  return new Promise((resolve, reject) => {
    Firebase.firestore().collection('USER')
      .where('uid', '==', userUID).get()
      .then((querySnapshot) => {
        if (querySnapshot.size > 2) reject(Error('Duplicate users with same userUID'));
        if (!querySnapshot.size) reject(Error('Invalid userUID'));
        querySnapshot.forEach((QueryDocumentSnapshot) => {
          resolve(QueryDocumentSnapshot.data().is_admin);
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function test() {

}
