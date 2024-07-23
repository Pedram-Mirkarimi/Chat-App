let matchedArray = [];
let notMatchedArray = [];

const Group = require('../models/group');

const addGroups = async (id) => {
  matchedArray = [];
  notMatchedArray = [];

  const matched = await Group.find({ $or: [{ adminID: id }, { 'members.memberID': id }] });
  matched.forEach((match) => {
    matchedArray.push(match);
  });

  const notMatched = await Group.find({ $and: [{ adminID: { $ne: id } }, { 'members.memberID': { $ne: id } }] });
  notMatched.forEach((notMatch) => {
    notMatchedArray.push(notMatch);
  });
};

const getMyGroups = () => {
  return matchedArray;
};

const getSuggestedGroups = () => {
  return notMatchedArray;
};

module.exports = {
  addGroups,
  getMyGroups,
  getSuggestedGroups
};
