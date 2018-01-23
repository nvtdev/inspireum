const express = require("express");
const router = express.Router();
const Update = require("../models/update");
const config = require("../config/database");

// Post
router.post("/post", (req, res, next) => {
     let newUpdate = new Update({
        author: req.body.author,
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

    router.get('/all', (req, res, next) => {
      let loggedUser = req.headers.loggeduser;
      Story.getAllUpdates(loggedUser, (err, updates) => {
        if (err) {
          res.json({success: false, msg:'Failed to load updates.'});
        } else {
          res.json({success: true, updates: updates});
        }
      });
    });  


module.exports = router;