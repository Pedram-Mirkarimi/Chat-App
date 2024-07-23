const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  groupName: {
    type: String,
    unique: true,
    required: true
  },
  adminID: {
    type: String,
    required: true
  },
  adminName: {
    type: String,
    required: true
  },
  members: [
    {
      memberID: {
        type: String
      },
      memberName: {
        type: String
      }
    }
  ]
});

groupSchema.methods.saveNewMember = async function (member) {
  const group = this;

  const memberID = member.userID;
  const memberName = member.userName;

  group.members = group.members.concat({ memberID, memberName });

  await group.save();
};

const Group = mongoose.model('Group', groupSchema);
module.exports = Group;
