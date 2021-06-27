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

// accessToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg4ZGYxMzgwM2I3NDM2NjExYWQ0ODE0NmE4ZGExYjA3MTg2ZmQxZTkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGV2U2FudGFyYSBJRCIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHaG9pS0haSmt5dGx5eVhlTVhhaGFFZ190ejFaNXdnbFJzdjI2R3o9czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZGV2c2FudGFyYS02MTM3ZiIsImF1ZCI6ImRldnNhbnRhcmEtNjEzN2YiLCJhdXRoX3RpbWUiOjE2MjQ4MDQ4MDYsInVzZXJfaWQiOiJ5N3AzeE4wTE9HVmppT3AxbjdLT2xvMU45am4yIiwic3ViIjoieTdwM3hOMExPR1ZqaU9wMW43S09sbzFOOWpuMiIsImlhdCI6MTYyNDgwNDgwNiwiZXhwIjoxNjI0ODA4NDA2LCJlbWFpbCI6ImRldnNhbnRhcmEuaWRAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMTMzMjM5MzcyNTk3NzAxNjg3MjciXSwiZW1haWwiOlsiZGV2c2FudGFyYS5pZEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.SS4UYF7H28Osh8bsv9qJgok7iuR3WgManVAxGnHH8QJQ3WQEM6VoaSJjFIhWs3yAVBe_RcLC7harrDPbNjYkr1QuRJ4a8xqZBhOJrlMiwvc5uSnu3duU6GDFfnPBUqevw3-kLOfamWI4XkYhqIbpVkaqpOyjkGdZNDmCcroJoh9HD0oLAbVXAD6U7yiTxBdWOmRrr7Y_ckOW5_6jvPccXTo8BcL_qKbeRgk_Mzn492eRkFDNt5kMW5a0DSnqyMg7KipltWg9Wj8BtT1dI5blwYACXdMzQ2lQECqryBXWfWdVCWy4Y-ZQdNUNf81uRl4cLfwhVboJE6hPRucYwrTk4Q';
