const socket = io();

// Elements
const $groupForm = document.querySelector('#make-groupForm');
const $groupFormInput = document.querySelector('#group-name');
const $groupFormButton = document.querySelector('#make-groupBtn');

const $joinForm = document.querySelector('#joinForm');
const $joinFormInput = document.querySelector('#group-name-join');
const $joinFormButton = document.querySelector('#joinFormBtn');

const $chatForm = document.querySelector('#groupName-form');
const $chatFormInput = document.querySelector('#groupName-chat');
const $chatFormButton = document.querySelector('#groupNameChatBtn');

if (document.cookie) {
  var x = document.cookie;
  var token = x.split('=')[1];
} else {
  alert('ابتدا وارد حساب کاربری خود شوید!');
  location.href = '/';
}

// Create Group
$groupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  $groupFormButton.setAttribute('disabled', 'disabled');
  const groupName = $groupFormInput.value;

  try {
    socket.emit('admin', { groupName, token }, (response) => {
      if (response.code == 201) {
        alert(response.msg);
        location.reload();
      } else if (response.code == 400) {
        alert(response.msg);
      } else {
        alert(response.msg);
        location.href = '/';
      }
    });
    $groupFormButton.removeAttribute('disabled');
    $groupFormInput.value = '';
  } catch (error) {
    console.log(error);
  }
});

// join Group
$joinForm.addEventListener('submit', (e) => {
  e.preventDefault();

  $joinFormButton.setAttribute('disabled', 'disabled');
  const groupName = $joinFormInput.value;

  try {
    socket.emit('joinGroup', { groupName, token }, (response) => {
      if (response.code == 201) {
        alert(response.msg);
        location.reload();
      } else if (response.code == 400) {
        alert(response.msg);
      } else {
        alert(response.msg);
        location.href = '/';
      }
    });
    $joinFormButton.removeAttribute('disabled');
    $joinFormInput.value = '';
  } catch (error) {
    console.log(error);
  }
});

// Group Name
$chatForm.addEventListener('submit', (e) => {
  e.preventDefault();

  $chatFormButton.setAttribute('disabled', 'disabled');
  const groupName = $chatFormInput.value;

  try {
    socket.emit('groupName', { groupName, token }, (response) => {
      if (response.code == 201) {
        location.href = '/chat';
      } else if (response.code == 400) {
        alert(response.msg);
      } else {
        alert(response.msg);
        location.href = '/';
      }
    });
    $chatFormButton.removeAttribute('disabled');
    $chatFormInput.value = '';
  } catch (error) {
    console.log(error);
  }
});
