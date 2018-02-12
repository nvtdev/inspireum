const mongoose = require("mongoose");
const config = require("../config/database");

// Follow Schema
const FollowSchema = mongoose.Schema({
  follower: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
});

const Follow = (module.exports = mongoose.model("Follow", FollowSchema));

module.exports.getFollowingsFromUser = function(user, callback) {
  Follow.find(
    {
      follower: user
    },
    callback
  );
};

module.exports.getFollowersForAuthor = function(author, callback) {
    Follow.find(
    {
      author: author
    },
    callback
  );
};

module.exports.addFollow = function(follow, callback) {
  follow.save(callback);
};
