const express = require("express");
const router = express.Router();
const Story = require("../models/story");
const config = require("../config/database");

// Post
router.post("/post", (req, res, next) => {
    let newStory = new Story({
      title: req.body.title,
      author: req.body.author,
      content: req.body.content,
      date: Date.now(),
      private: req.body.private
    });
  
    Story.addStory(newStory, (err, story) => {
      if (err)
      {
        console.log(err);
        res.json({
          success: false,
          msg: "Failed to add story"
        });
      }
      else
        res.json({
          success: true,
          msg: "New story added",
          story: story
        });
    });
  });

  // Get all public stories from user
router.get('/allFromUser', (req, res, next) => {
  let username = req.headers.username;
  Story.getAllStoriesFromUser(username, (err, stories) => {
    if (err) {
      res.json({success: false, msg:'Failed to load stories.'});
    } else {
      res.json({success: true, stories: stories});
    }
  });
});

// Get all stories (including private) from user
router.get('/allFromCurrentUser', (req, res, next) => {
  let username = req.headers.username;
  Story.getAllStoriesFromCurrentUser(username, (err, stories) => {
    if (err) {
      res.json({success: false, msg:'Failed to load stories.'});
    } else {
      res.json({success: true, stories: stories});
    }
  });
});
  
module.exports = router;