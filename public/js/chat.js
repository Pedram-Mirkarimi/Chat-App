const socket = io();

// Elements
const $messageForm = document.querySelector('#message-form');
const $messageFormInput = $messageForm.querySelector('input');
const $messageFormButton = $messageForm.querySelector('button');
const $sendLocationButton = document.querySelector('#send-location');
const $messages = document.querySelector('#messages');
const $logout = document.getElementById('logout');

// Templates
const messageTemplate = document.querySelector('#message-template').innerHTML;
const locationMessageTemplate = document.querySelector('#location-message-template').innerHTML;
const sidbarTemplate = document.querySelector('#sidebar-template').innerHTML;
const headerTemplate = document.querySelector('#header-template').innerHTML;

if (document.cookie) {
  var x = document.cookie;
  var token = x.split('=')[1];
} else {
  alert('ابتدا وارد حساب کاربری خود شوید!');
  location.href = '/';
}

const startTime = () => {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML = h + ':' + m + ':' + s;
  const t = setTimeout(startTime, 1000);
};

const checkTime = (i) => {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
};

const autoscroll = () => {
  // New message element
  const $newMessage = $messages.lastElementChild;

  // Height of the new messages
  const newMessageStyles = getComputedStyle($newMessage);
  const newMessageMargin = parseInt(newMessageStyles.marginBottom);
  const newMessageHeight = $newMessage.offsetHeight + newMessageMargin + newMessageMargin;

  // Visible height
  const visibleHeight = $messages.offsetHeight;

  // Height of messages container
  const containerHeight = $messages.scrollHeight;

  // How far have I scrolled?
  const scrollOffset = $messages.scrollTop + visibleHeight;

  if (containerHeight - newMessageHeight <= scrollOffset) {
    $messages.scrollTop = $messages.scrollHeight;
  }
};

socket.on('message', (message) => {
  const html = Mustache.render(messageTemplate, {
    username: message.username,
    message: message.text,
    createdAt: moment(message.createdAt).format('HH:mm')
  });
  $messages.insertAdjacentHTML('beforeend', html);
  autoscroll();
});

socket.on('locationMessage', (message) => {
  const html = Mustache.render(locationMessageTemplate, {
    username: message.username,
    url: message.url,
    createdAt: moment(message.createdAt).format('HH:mm')
  });
  $messages.insertAdjacentHTML('beforeend', html);
  autoscroll();
});

socket.on('headerData', ({ group }) => {
  const html = Mustache.render(headerTemplate, {
    group
  });
  document.querySelector('#header').innerHTML = html;
  document.querySelector('#date').innerHTML = moment().locale('fa').format('dddd YY/MM/DD');
  startTime();
});

socket.on('groupData', ({ group, admin, users }) => {
  const html = Mustache.render(sidbarTemplate, {
    group,
    admin,
    users
  });
  document.querySelector('#sidebar').innerHTML = html;
});

$messageForm.addEventListener('submit', (e) => {
  e.preventDefault();

  $messageFormButton.setAttribute('disabled', 'disabled');
  const message = $messageFormInput.value;

  try {
    socket.emit('sendMessage', message);
    $messageFormButton.removeAttribute('disabled');
    $messageFormInput.value = '';
    $messageFormInput.focus();
  } catch (error) {
    console.log(error);
  }
});

$sendLocationButton.addEventListener('click', () => {
  if (!navigator.geolocation) {
    return alert('متاسفانه مرورگر شما سیستم موقعیت یابی جغرافیایی را پشتیبانی نمی کند!');
  }

  $sendLocationButton.setAttribute('disabled', 'disabled');

  navigator.geolocation.getCurrentPosition((position) => {
    try {
      socket.emit('sendLocation', { latitude: position.coords.latitude, longitude: position.coords.longitude });
      $sendLocationButton.removeAttribute('disabled');
    } catch (error) {
      console.log(error);
    }
  });
});

document.getElementById('back').addEventListener('click', (e) => {
  e.preventDefault();

  location.href = '/group';
});

$logout.addEventListener('click', (e) => {
  e.preventDefault();
  document.cookie = 'token=;' + 'expires=Thu, 01 Jan 1970 00:00:00 UTC;' + 'path=/group';
  document.cookie = 'token=;' + 'expires=Thu, 01 Jan 1970 00:00:00 UTC;' + 'path=/chat';
  location.href = '/';
});

socket.emit('join', token, (error) => {
  alert(error);
  location.href = '/group';
});
