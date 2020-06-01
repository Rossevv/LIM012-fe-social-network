/* eslint-disable import/no-unresolved */

import { changeView } from './router.js';

const init = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => {
    changeView(window.location.hash);
  });
};
window.addEventListener('load', init);
