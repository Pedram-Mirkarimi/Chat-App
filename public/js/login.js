const socket = io();

// Elements
const $loginForm = document.querySelector('#loginForm');
const $email = $loginForm.querySelector('#email');
const $password = $loginForm.querySelector('#password');

$loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = $email.value;
  const password = $password.value;

  socket.emit('login', { email, password }, (response) => {
    if (response.code == 200) {
      const token = response.token;
      setCookie(token);
      location.href = '/group';
    } else {
      alert(response.msg);
    }
  });
});

function setCookie(cvalue) {
  var d = new Date();
  d.setTime(d.getTime() + 6 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();
  document.cookie = 'token=' + cvalue + ';' + expires + ';path=/chat';
  document.cookie = 'token=' + cvalue + ';' + expires + ';path=/group';
}
