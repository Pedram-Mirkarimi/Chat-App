const express = require('express');

const router = express.Router();

const User = require('../models/user');
const { addGroups, getMyGroups, getSuggestedGroups } = require('../utils/groups');

router.get('/', (req, res, next) => {
  res.render('index', {
    pageTitle: 'ورود | Sign In'
  });
});

router.get('/register', (req, res, next) => {
  res.render('register', {
    pageTitle: 'ثبت نام | Sign Up'
  });
});

router.get('/group', async (req, res, next) => {
  const cookie = req.headers.cookie;
  if (!cookie) {
    return res.status(401).redirect('/');
  }
  const token = cookie.split('=')[1];
  const user = await User.findOne({ token });
  const userID = user._id;
  await addGroups(userID);
  res.render('group', {
    pageTitle: 'گروه های من | My Groups',
    myGroups: getMyGroups(userID),
    suggestedGroups: getSuggestedGroups(userID)
  });
});

router.get('/chat', (req, res, next) => {
  res.render('chat', {
    pageTitle: 'برنامه چت | Chat App'
  });
});

router.get('*', (req, res, next) => {
  res.status(404).render('404', {
    pageTitle: 'صفحه موردنظر یافت نشد | !404 Error'
  });
});

module.exports = router;
