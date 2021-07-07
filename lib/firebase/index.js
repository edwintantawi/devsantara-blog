import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './config';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const localPersistence = firebase.auth.Auth.Persistence.LOCAL;
export default firebase;
