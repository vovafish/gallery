import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../lib/firebase.config';

const provider = new GoogleAuthProvider();

const FirebaseAuth = {
  signIn: () => {
    return new Promise((resolve) => {
      signInWithPopup(auth, provider)
        .then((response) => {
          resolve(response.user);
        })
        .catch(console.error);
    });
  },
  signOut: () => {
    return new Promise((resolve) => {
      signOut(auth)
        .then(() => {
          console.log('user logged out');
          resolve();
        })
        .catch(console.error);
    });
  },
};

export default FirebaseAuth;
