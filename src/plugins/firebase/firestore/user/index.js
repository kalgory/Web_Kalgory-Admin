import Firebase from 'firebase/app';

// eslint-disable-next-line import/prefer-default-export
export function checkAdmin(userUID) {
  return new Promise((resolve, reject) => {
    Firebase.firestore().collection('USER').where('uid', '==', userUID).get()
      .then((querySnapshot) => {
        if (querySnapshot.size > 1) {
          reject(Error('Duplicate users with same userUID'));
        }
        if (querySnapshot.empty) {
          reject(Error('No data!'));
        }
        resolve(querySnapshot.docs[0].data().is_admin);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
