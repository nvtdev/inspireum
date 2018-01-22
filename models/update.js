const mongoose = require("mongoose");
const config = require("../config/database");

// Update Schema
const UpdateSchema = mongoose.Schema({
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

module.exports.addUpdate = function(update, callback) {
    update.save(callback);
};