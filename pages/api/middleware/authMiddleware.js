import admin from 'firebase-admin';

const authMiddleware = (req) => {
  const { idtoken } = req.headers;
  return new Promise((resolve, reject) => {
    if (idtoken) {
      admin
        .auth()
        .verifyIdToken(idtoken)
        .then((user) => {
          resolve(user);
        })
        .catch(() => reject());
    } else {
      reject();
    }
  });
};

export default authMiddleware;
