import authMiddleware from '../middleware/authMiddleware';

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
  const { method, body } = req;

  if (method === 'POST') {
    const bodyJson = JSON.parse(body);

    authMiddleware(req)
      .then((user) => {
        const blogPostData = {
          authorPicture: user.picture,
          authorName: user.name,
          authorEmail: user.uid,
          timestamp: admin.firestore.FieldValue.serverTimestamp(),
          title: bodyJson.title,
          tags: bodyJson.tags.split(',').map((tag) => tag.trim()),
          keywords: bodyJson.title.split(' '),
          postJson: bodyJson.postJson,
        };
        admin.firestore().collection('blog_posts').add(blogPostData);

        res.status(201).json({ message: 'Post success' });
      })
      .catch(() => res.status(401).json({ message: 'Unauthorized' }));
  }

  if (method === 'GET') {
    admin
      .firestore()
      .collection('blog_posts')
      .orderBy('timestamp', 'desc')
      .get()
      .then((querySnapshot) => {
        const results = [];
        querySnapshot.forEach((result) =>
          results.push({ id: result.id, data: result.data() })
        );
        res.status(200).json({ message: 'success', results });
      });
  }
};

export default handler;
