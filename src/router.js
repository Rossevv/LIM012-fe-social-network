import { views } from './views/index.js';
import { logInAutentication, signUpAutentication } from './controllers/controller-autentication.js';


const changeView = (route) => {
  // console.log(route);
  const container = document.getElementById('general-container');
  container.innerHTML = '';
  switch (route) {
    case '':
    case '#':
    case '#/': { return container.appendChild(logInAutentication()); }
    case '#/register': { return container.appendChild(signUpAutentication()); }
    case '#/home': { return container.appendChild(views.home()); }
    default:
      return container.appendChild(views.error());
  }
};

export { changeView };
