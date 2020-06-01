/* eslint-disable max-len */
import { auth } from '../firebase.js';

export const authSignUp = (email, password) => auth.createUserWithEmailAndPassword(email, password);
export const authSignIn = (email, password) => auth.signInWithEmailAndPassword(email, password);
export const authSignOut = () => auth.signOut();

export const signInGmail = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return auth.signInWithPopup(provider);
};
export const signInFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return auth.signInWithPopup(provider);
};
