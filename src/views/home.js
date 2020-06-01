// import { signOutUser } from '../controllers/controller-autentication.js';

export default () => {
  const viewHome = `
    <p>HOLA!</p>
    <div class="ask-option flex">
        <p class="question" id="comment-register">HOME PRUEBA</p>
        <a class="option" id="comment-signin" href="#/">login</a>
        <button class="btn-form" id="btn-cerrar">Prueba-cerrar</button>
    </div>
  `;
  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewHome;
  const btnCerrar = divElemt.querySelector('#btn-cerrar');
  btnCerrar.addEventListener('click', (e) => {
    e.preventDefault();
    // signOutUser();
  });
  return divElemt;
};
