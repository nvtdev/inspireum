const mongoose = require("mongoose");
const config = require("../config/database");

// Story Schema
const StorySchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
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
  tags: {
    type: String
  },
  endDate: {
    type: Date
  }
});

const Story = (module.exports = mongoose.model("Story", StorySchema));

module.exports.getStoriesByAuthor = function(author, callback) {
  Story.find(
    {
      $and: [{ private: false }, { author: username }]
    },
    callback
  );
};

module.exports.getAllStoriesFromCurrentUser = function(username, callback) {
  Story.find(
    {
      author: username
    },
    callback
  );
};

module.exports.getAllStories = function(loggedUser, callback) {
  if (loggedUser != "") {
    Story.find(
      {
        $or: [{ private: false }, { author: loggedUser }]
      },
      callback
    );
  } else {
    Story.find(
      {
        private: false
      },
      callback
    );
  }
};

module.exports.addStory = function(story, callback) {
  story.save(callback);
};

module.exports.getTrendingTags = function (callback) {
  
}
