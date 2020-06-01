/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
import { views } from '../views/index.js';
import {
  authSignUp,
  authSignIn,
  // authSignOut,
  signInGmail,
  signInFacebook,
} from '../models/model-authentication.js';
import { validateEmail } from '../utils.js/utils.js';


export const logInAutentication = () => {
  const view = views.logIn();
  const authInSignIn = () => {
    const email = view.querySelector('#email-login').value;
    const password = view.querySelector('#password-login').value;
    const validateSintaxEmail = validateEmail(email);
    if (!validateSintaxEmail) {
      const inputsForm = view.querySelector('.inputs-form');
      inputsForm.outerHTML += '<span class="spanOuter">Email inválido</span>';
      return;
    }
    authSignIn(email, password)
      .then(() => {
        // e.preventDefault();
        window.location.hash = '#/home';
      })
      .catch((error) => {
        let message = '';
        if (error.code === 'auth/invalid-email') {
          message = 'Contraseña o correo inválido';
        } else if (error.code === 'auth/user-not-found') {
          message = 'usario no extiste';
        } else if (error.code === 'auth/invalid-password') {
          message = 'revise su contraseña';
        }
        const logInForm = view.querySelector('.inputs-form');
        logInForm.outerHTML += `<span class="spanOuter">${message}</span>`;
      });
  };

  const btnLogin = view.querySelector('#btn-login');
  btnLogin.addEventListener('click', authInSignIn);

  const btnGoogle = view.querySelector('#google-login');
  btnGoogle.addEventListener('click', signInGmail);

  const btnFacebook = view.querySelector('#facebook-login');
  btnFacebook.addEventListener('click', signInFacebook);
  return view;
};

export const signUpAutentication = () => {
  const view2 = views.signUp();
  const authInSignUp = () => {
    const email = view2.querySelector('#email-register').value;
    const password = view2.querySelector('#password-register').value;
    const validateSintaxEmail = validateEmail(email);
    if (!validateSintaxEmail) {
      const inputsForm = view2.querySelector('.inputs-form');
      inputsForm.outerHTML += '<span class="spanOuter">Email inválido</span>';
      return;
    }
    authSignUp(email, password)
      .then(() => {
        window.location.hash = '#/';
      })
      .catch((error) => {
        let message = '';
        if (error.code === 'auth/invalid-email') {
          message = 'Contraseña o correo inválido';
        } else if (error.code === 'auth/user-not-found') {
          message = 'correo no existente';
        }
        const logInForm = view2.querySelector('.inputs-form');
        logInForm.outerHTML += `<span class="spanOuter">${message}</span>`;
      });
  };

  const btnRegister = view2.querySelector('#btn-register');
  btnRegister.addEventListener('click', authInSignUp);

  const btnGoogle = view2.querySelector('#google-register');
  btnGoogle.addEventListener('click', signInGmail);

  const btnFacebook = view2.querySelector('#facebook-register');
  btnFacebook.addEventListener('click', signInFacebook);
  return view2;
};
