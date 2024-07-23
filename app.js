const path = require('path');
const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const socketio = require('socket.io');

require('dotenv').config();

const User = require('./models/user');
const Group = require('./models/group');

const routes = require('./routes/route');

const { generateMessage, generateLocationMessage } = require('./utils/messages');
const { addUser, getUser, getUsersInGroup, removeUser } = require('./utils/users');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const server = http.createServer(app);
const io = socketio(server);

const PORT = process.env.PORT;
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

io.on('connection', (socket) => {
  socket.on('register', (options, callback) => {
    const username = options.username.trim().toLowerCase();
    const email = options.email.trim().toLowerCase();
    const password = options.password.trim();

    if (validator.isEmpty(username)) {
      const msg = 'لطفا نام کاربری خود را وارد نمائید!';
      return callback({ msg, code: 400 });
    }

    if (validator.isEmpty(email)) {
      const msg = 'لطفا ایمیل خود را وارد نمائید!';
      return callback({ msg, code: 400 });
    }

    if (validator.isEmpty(password)) {
      const msg = 'لطفا کلمه عبور خود را وارد نمائید!';
      return callback({ msg, code: 400 });
    }

    if (!validator.isEmail(email)) {
      const msg = 'ایمیل وارد شده صحیح نمی باشد!';
      return callback({ msg, code: 400 });
    }

    if (!validator.isLength(password, { min: 8 })) {
      const msg = 'کلمه عبور حداقل بایستی 8 کاراکتر باشد!';
      return callback({ msg, code: 400 });
    }

    User.findOne({ email }, (err, anyUser) => {
      if (anyUser) {
        const msg = 'ایمیل وارد شده تکراری می باشد!';
        return callback({ msg, code: 400 });
      }
    });

    bcrypt
      .hash(password, 10)
      .then((hashedPw) => {
        const user = new User({
          username,
          email,
          password: hashedPw
        });
        return user.save();
      })
      .then((result) => {
        const msg = 'ثبت نام با موفقیت انجام شد!';
        return callback({ msg, code: 201 });
      })
      .catch((error) => {
        const msg = 'ثبت نام با خطا مواجه شد!';
        return callback({ msg, code: 400 });
      });
  });

  socket.on('login', async (options, callback) => {
    const email = options.email.trim().toLowerCase();
    const password = options.password.trim();

    if (validator.isEmpty(email)) {
      const msg = 'لطفا ایمیل خود را وارد نمائید!';
      return callback({ msg, code: 400 });
    }

    if (validator.isEmpty(password)) {
      const msg = 'لطفا کلمه عبور خود را وارد نمائید!';
      return callback({ msg, code: 400 });
    }

    if (!validator.isEmail(email)) {
      const msg = 'ایمیل وارد شده صحیح نمی باشد!';
      return callback({ msg, code: 400 });
    }

    if (!validator.isLength(password, { min: 8 })) {
      const msg = 'کلمه عبور خود را مجدد بررسی نمائید!';
      return callback({ msg, code: 400 });
    }

    const { user, error } = await User.findByCredentials(email, password);
    if (error) {
      const msg = error;
      return callback({ msg, code: 401 });
    } else {
      const token = await user.generateToken();
      return callback({ token, code: 200 });
    }
  });

  socket.on('admin', async (options, callback) => {
    const groupName = options.groupName.trim();
    const token = options.token;

    if (validator.isEmpty(groupName)) {
      const msg = 'لطفاً نام گروهی که می خواهید ساخته شود را وارد نمائید!';
      return callback({ msg, code: 400 });
    }

    const checkName = await Group.findOne({ groupName });
    if (checkName) {
      const msg = 'گروهی با همین نام وجود دارد، لطفاً نام دیگری انتخاب کنید!';
      return callback({ msg, code: 400 });
    } else {
      jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        if (err) {
          const msg = 'توکن شما منقضی شده، لطفاً مجدداً وارد حساب خود شوید.';
          return callback({ msg, code: 401 });
        } else {
          const fetchedUser = await User.findOne({ _id: decoded._id, token });
          await fetchedUser.saveGroupAdmin(groupName);
          const group = new Group({
            groupName,
            adminID: decoded._id,
            adminName: fetchedUser.username
          });
          return group
            .save()
            .then((result) => {
              const msg = 'تبریک، گروه با موفقیت ساخته شد!';
              return callback({ msg, code: 201 });
            })
            .catch((err) => {
              const msg = 'عملیات ساخت گروه با خطا مواجه شد!';
              return callback({ msg, code: 400 });
            });
        }
      });
    }
  });

  socket.on('joinGroup', async (options, callback) => {
    const groupName = options.groupName.trim();
    const token = options.token;

    if (validator.isEmpty(groupName)) {
      const msg = 'لطفاً نام گروهی که می خواهید به آن ملحق شوید را وارد نمائید!';
      return callback({ msg, code: 400 });
    }

    const fetchedGroup = await Group.findOne({ groupName });
    if (!fetchedGroup) {
      const msg = 'گروهی با چنین نام وجود ندارد!';
      return callback({ msg, code: 400 });
    }

    const fetchedUser = await User.findOne({ token });
    const userID = fetchedUser._id;
    const userName = fetchedUser.username;

    if (fetchedGroup.adminID == userID) {
      const msg = 'شما به عنوان ادمین گروه قبلاً ثبت شده اید!';
      return callback({ msg, code: 400 });
    }

    const matched = await Group.findOne({ $and: [{ 'members.memberID': userID }, { groupName: groupName }] });
    if (matched) {
      const msg = 'شما به عنوان عضو گروه قبلاً ملحق شده اید!';
      return callback({ msg, code: 400 });
    }

    try {
      await fetchedGroup.saveNewMember({ userID, userName });
      const msg = 'تبریک، عضویت شما به گروه موردنظر با موفقیت انجام شد!';
      return callback({ msg, code: 201 });
    } catch (err) {
      const msg = 'خطایی رخ داده، لطفاً دوباره سعی کنید!';
      return callback({ msg, code: 400 });
    }
  });

  socket.on('groupName', async (options, callback) => {
    const groupName = options.groupName.trim();
    const token = options.token;

    if (validator.isEmpty(groupName)) {
      const msg = 'لطفاً نام یکی از گروه های خود را جهت چت کردن، وارد نمائید!';
      return callback({ msg, code: 400 });
    }

    const fetchedGroup = await Group.findOne({ groupName });
    const fetchedUser = await User.findOne({ token });
    const userID = fetchedUser._id;

    if (!fetchedGroup) {
      const msg = 'متاسفانه، چنین گروهی وجود ندارد!';
      return callback({ msg, code: 400 });
    }

    const anyGroups = await Group.findOne({
      $or: [
        { $and: [{ 'members.memberID': userID }, { groupName: groupName }] },
        { $and: [{ adminID: userID }, { groupName: groupName }] }
      ]
    });

    if (anyGroups) {
      try {
        fetchedUser.saveGroupName(groupName);
        return callback({ code: 201 });
      } catch (err) {
        const msg = 'خطایی رخ داده، لطفاً دوباره سعی کنید!';
        return callback({ msg, code: 400 });
      }
    } else {
      const msg = 'شما عضو گروه مورد نظر نمی باشید!';
      return callback({ msg, code: 400 });
    }
  });

  socket.on('join', async (token, callback) => {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const fetchedUser = await User.findOne({ _id: decoded._id, token });
      if (fetchedUser) {
        let username = fetchedUser.username;
        let email = fetchedUser.email;
        let group = fetchedUser.group;

        const { error, user } = addUser({ id: socket.id, username, email, group });
        if (error) {
          return callback(error);
        }
        
        const fetchedGroup = await Group.findOne({ groupName: group });

        socket.join(user.group);
        socket.emit('message', generateMessage('بات', 'خوش آمدید!'));
        socket.broadcast.to(user.group).emit('message', generateMessage('بات', `${user.username} وارد گروه شد!`));
        io.to(user.group).emit('headerData', { group: user.group });
        io.to(user.group).emit('groupData', {
          group: user.group,
          admin: fetchedGroup.adminName,
          users: getUsersInGroup(user.group)
        });
      }
    } catch (error) {
      return callback('احراز هویت شما منقضی شده، مجدداً وارد حساب تان شوید!');
    }
  });

  socket.on('sendMessage', (message) => {
    const user = getUser(socket.id);
    if (user) {
      io.to(user.group).emit('message', generateMessage(user.username, message));
    }
  });

  socket.on('sendLocation', (coords) => {
    const user = getUser(socket.id);
    if (user) {
      io.to(user.group).emit(
        'locationMessage',
        generateLocationMessage(user.username, `https://google.com/maps?q=${coords.latitude},${coords.longitude}`)
      );
    }
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);
    if (user) {
      io.to(user.group).emit('message', generateMessage('بات', `${user.username} از گروه خارج شد!`));
      io.to(user.group).emit('groupData', {
        group: user.group,
        users: getUsersInGroup(user.group)
      });
    }
  });
});

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then((result) => {
    console.log('Database connected!');
    server.listen(PORT, () => {
      console.log(`Server is up on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
