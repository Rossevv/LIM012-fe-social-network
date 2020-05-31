import { views } from './view/view-index.js';

const changeView = (route) => {
  // console.log(route);
  const container = document.getElementById('general-container');
  container.innerHTML = '';
  switch (route) {
    case '':
    case '#':
    case '#/': { return container.appendChild(views.login()); }
    case '#/register': { return container.appendChild(views.register()); }
    case '#/home': { return container.appendChild(views.home()); }
    default:
      return container.appendChild(views.error());
  }
};

export { changeView };
