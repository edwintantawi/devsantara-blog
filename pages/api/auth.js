import authMiddleware from './middleware/authMiddleware';

const admin = require('firebase-admin');

const firebaseCredential = JSON.parse(
  process.env.NEXT_PUBLIC_FIREBASE_CREDENTIAL
);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(firebaseCredential),
  });
}

const handler = (req, res) => {
  authMiddleware(req)
    .then(() => {
      res.status(200).json({ message: 'Authorized' });
    })
    .catch(() => {
      res.status(401).json({ message: 'Unauthorized' });
    });
};

export default handler;
