const express = require("express");
const router = express.Router();
const Story = require("../models/story");
const config = require("../config/database");

// Post
router.post("/post", (req, res, next) => {
  console.log(req);
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
  
module.exports = router;