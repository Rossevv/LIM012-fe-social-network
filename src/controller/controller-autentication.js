/* eslint-disable no-console */
// eslint-disable-next-line import/no-cycle
import { componentsView } from '../view/view-index.js';

import {
  signUp,
  signIn,
  signOut,
  signInGoogle,
  signInFacebook,
} from '../model/model-authentication.js';

// REGISTRAR USUARIO
export const registerNewUser = (emailRegister, passwordRegister) => {
  signUp(emailRegister, passwordRegister)
    .then((userCredential) => {
      console.log('registradx', userCredential);
      window.location.hash = '#/home';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
};

// INICIAR SESIÓN
export const authSignIn = (emailLogin, passwordLogin) => {
  const view = componentsView.logIn();
  signIn(emailLogin, passwordLogin)
    .then((userCredential) => {
      console.log('Usted ya ingreso, ya esta logeadx', userCredential);
      window.location.hash = '#/home';
    })
    .catch((error) => {
      // Handle Errors here.
      let message = '';
      if (error.code === 'auth/invalid-email') {
        message = 'Contraseña o correo inválido';
      } else if (error.message === 'auth/user-not-found') {
        message = 'usario no extiste';
      } else if (error.code === 'auth/invalid-password') {
        message = 'revise su contraseña';
      }
      const logInForm = view.querySelector('.inputs-form');
      logInForm.outerHTML += `<span class="spanOuter">${message}</span>`;
    });
};

// AUTENTICACIÓN CON GOOGLE
export const authSignInGoogle = () => {
  signInGoogle()
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      window.location.hash = '#/home';
      console.log('google Sign In');
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      console.log('Error Google Prueba');
      console.log(errorCode);
      console.log(errorMessage);
      console.log(email);
      console.log(credential);
    });
};

// AUTENTICACIÓN CON FACEBOOK
export const authSignInFacebook = () => {
  signInFacebook()
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      window.location.hash = '#/home';
      console.log('Facebook Sign In');
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      console.log('Error Facebook Prueba');
      console.log(errorCode);
      console.log(errorMessage);
      console.log(email);
      console.log(credential);
    });
};

// CERRAR SESIÓN
export const signOutUser = () => {
  signOut()
    .then((resp) => {
      console.log('Saliendo...!', resp);
    })
    .catch((error) => {
      console.log(error);
    });
};
