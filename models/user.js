const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    group: {
      type: String,
      default: ' '
    },
    token: {
      type: String
    },
    creatorOf: [
      {
        group: {
          type: String
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

userSchema.methods.saveGroupName = async function (group) {
  const user = this;

  user.group = group;
  await user.save();
};

userSchema.methods.saveGroupAdmin = async function (group) {
  const user = this;

  user.creatorOf = user.creatorOf.concat({ group });
  await user.save();
};

userSchema.methods.generateToken = async function () {
  const user = this;

  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET, { expiresIn: '6h' });
  user.token = token;
  await user.save();

  return token;
};

userSchema.statics.findByEmail = async (email) => {
  const user = await User.findOne({ email });
  return user;
};

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    return {
      error: 'کاربری با این ایمیل یافت نشد!'
    };
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return {
      error: 'کلمه عبور وارد شده، صحیح نمی باشد!'
    };
  }

  return { user };
};

const User = mongoose.model('User', userSchema);
module.exports = User;
