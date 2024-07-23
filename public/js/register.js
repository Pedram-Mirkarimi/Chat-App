const socket = io();

// Elements
const $registerForm = document.querySelector('#registerForm');
const $username = $registerForm.querySelector('#username');
const $email = $registerForm.querySelector('#email');
const $password = $registerForm.querySelector('#password');

$registerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = $username.value;
  const email = $email.value;
  const password = $password.value;

  socket.emit('register', { username, email, password }, (response) => {
    if (response.code == 201) {
      alert(response.msg);
      location.href = '/';
    } else {
      alert(response.msg);
    }
  });
});
