/* eslint-disable import/no-cycle */
import home from './home.js';
import signUp from './signUp.js';
import logIn from './logIn.js';
import error from './error.js';
import profile from './profile.js';

const views = {
  home,
  signUp,
  logIn,
  error,
  profile,
};

export { views };
