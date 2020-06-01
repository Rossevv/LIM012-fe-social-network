
export default () => {
  const viewLogin = `
    <div class="ctn-register-login">
    <div class="content flex column">
      <div class="">
        <h1 class="delivery-drone">Delivery Drone</h1>
        <h6 class="safetyHome"> STAY HOME, STAY SAFE</h6>
      </div>
      <form id="form">
      <div class="container-form flex column">
        <div class="data-register flex column" id="divBtn">
          <div class="inputs-form">
            <input class="email" id="email-login" type="email" placeholder="E-mail" >
            <input class="password" id="password-login" type="password" placeholder="Password">
          </div>
          <button class="btn-form" id="btn-login">Log In</button>
        </div>
        <p class="txt-register">Or</p>
        <div class="options-register">
          <img class="logo-fb" src="/assets/fb.png" alt="" id="facebook-login">
          <img class="logo-google" src="/assets/gg.png" alt="" id="google-login">
        </div>
        <div class="ask-option flex">
          <p class="question" id="comment-register">Don’t have an account?</p>
          <a class="option" id="comment-signin" href="#/register">Sign Up</a>
        </div>
      </div>
      </form>
      <h4 class="find-delivers">FIND DELIVERIES TO <br> YOU SAFELY</h4>
    </div>
  </div>`;

  const divElement = document.createElement('div');
  divElement.id = 'main.div';
  divElement.innerHTML = viewLogin;

  return divElement;
};
