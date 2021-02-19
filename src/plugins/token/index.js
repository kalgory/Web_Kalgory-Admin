import Firebase from 'firebase';

export function getToken(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();

  return undefined;
}

export function setToken(name) {
  return new Promise((resolve, reject) => {
    Firebase.auth().currentUser.getIdToken(true)
      .then((token) => {
        document.cookie = `${name}=${token};max-age=3600`;
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function removeToken(name) {
  return new Promise((resolve, reject) => {
    try {
      document.cookie = `${name}=; Max-Age=-1;`;
      resolve();
    } catch (error) {
      reject();
    }
  });
}
