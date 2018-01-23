const mongoose = require("mongoose");
const config = require("../config/database");

// Update Schema
const UpdateSchema = mongoose.Schema({
    author: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    private: {
      type: Boolean,
      required: true
    },
    storyId: {
        type: String,
        required: true
    }
});

const Update = (module.exports = mongoose.model("Update", UpdateSchema));

module.exports.getUpdatesForStory = function(storyId, all, callback) {
  if (all)
  {
    Story.find(
          { storyId: storyId }
      , callback);
  } else {
    Story.find({
        $and:
        [
          { privacy: 'Public' } ,
          { storyId: storyId }
        ]
      }, callback);
  }
};

module.exports.getAllUpdates = function (loggedUser, callback) {
  if (loggedUser) 
  {
    Update.find({
      $or:
      [
        { private: false } ,
        { author: loggedUser }
      ]
    }, callback);
  } else {
    Update.find({
      private: false
    }, callback);
  }
}

module.exports.addUpdate = function(update, callback) {
    update.save(callback);
};