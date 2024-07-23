const users = [];

const addUser = (options) => {
  const id = options.id;
  const username = options.username;
  const email = options.email;
  const group = options.group;

  const existingUser = users.find((user) => {
    return user.email === email && user.group === group;
  });

  if (existingUser) {
    return {
      error: 'ایمیل در گروه مورد نظر در حال استفاده می باشد!'
    };
  }

  const user = { id, username, email, group };
  users.push(user);
  return { user };
};

const getUser = (id) => {
  return users.find((user) => user.id === id);
};

const getUsersInGroup = (group) => {
  return users.filter((user) => user.group === group);
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

module.exports = {
  addUser,
  getUser,
  getUsersInGroup,
  removeUser
};
