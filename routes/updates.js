const express = require("express");
const router = express.Router();
const Update = require("../models/update");
const config = require("../config/database");

// Post
router.post("/post", (req, res, next) => {
     let newUpdate = new Update({
        content: req.body.content,
        date: Date.now(),
        private: req.body.private,
        storyId: req.body.storyId
      });
    
      Update.addUpdate(newUpdate, (err, update) => {
        if (err)
        {
          console.log(err);
          res.json({
            success: false,
            msg: "Failed to add update"
          });
        }
        else
          res.json({
            success: true,
            msg: "New update added",
            update: update
          });
      });
    });

module.exports = router;