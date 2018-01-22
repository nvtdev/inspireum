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
    }
});

const Story = (module.exports = mongoose.model("Story", StorySchema));

module.exports.getStoriesByAuthor = function(author, callback) {
    const query = { author: author };
    Story.find(query, callback);
  };

module.exports.addStory = function(story, callback) {
    story.save(callback);
};