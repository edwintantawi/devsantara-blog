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
  const { id } = req.query;

  admin
    .firestore()
    .collection('blog_posts')
    .doc(id)
    .get()
    .then((doc) => {
      if (doc.exists) {
        res.status(200).json({ message: 'Success', data: doc.data() });
      } else {
        res.status(404).json({ message: 'Not found' });
      }
    });
};

export default handler;
