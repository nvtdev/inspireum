const express = require("express");
const router = express.Router();
const Follow = require("../models/follow");
const config = require("../config/database");

// Add follow
router.post("/add", (req, res, next) => {
    let newFollow = new Follow({
      follower: req.body.follower,
      author: req.body.author,
    });
  
    Follow.addFollow(newFollow, (err, follow) => {
      if (err) {
        console.log(err);
        res.json({
          success: false,
          msg: "Failed to add follow"
        });
      } else
      {
        Follow.getAllForUser(newFollow.follower, (err, result) => {
          if (err) {
            res.json({ success: false, msg: "Failed to add follow." });
          } else {
            res.json({ success: true, data: result });
          }
        });
      }
    });
  });

// Remove follow
router.post("/remove", (req, res, next) => {
  let user = req.headers.user,
      followToRemove = new Follow({
        follower: req.body.follower,
        author: req.body.author,
      });

  Follow.removeFollow(followToRemove, (err, follow) => {
    if (err) {
      console.log(err);
      res.json({
        success: false,
        msg: "Failed to remove follow"
      });
    } else
    {
      Follow.getAllForUser(followToRemove.follower, (err, result) => {
        if (err) {
          res.json({ success: false, msg: "Failed to remove follow." });
        } else {
          res.json({ success: true, data: result });
        }
      });
    }
  });
});

// Get all authors a user follows
router.get("/followingsFromUser", (req, res, next) => {
    let user = req.headers.user;
    Follow.getFollowingsFromUser(user, (err, followings) => {
      if (err) {
        res.json({ success: false, msg: "Failed to load followings." });
      } else {
        res.json({ success: true, followings: followings });
      }
    });
  });

// Get all users an author is followed by
router.get("/followersForAuthor", (req, res, next) => {
    let author = req.headers.author;
    Follow.getFollowersForAuthor(author, (err, followers) => {
      if (err) {
        res.json({ success: false, msg: "Failed to load followers." });
      } else {
        res.json({ success: true, followers: followers });
      }
    });
  });

// Get both followings and followers
router.get("/allForUser", (req, res, next) => {
  let user = req.headers.user;
  
  Follow.getAllForUser(user, (err, result) => {
    if (err) {
      res.json({ success: false, msg: "Failed to load data." });
    } else {
      res.json({ success: true, data: result });
    }
  });
});

module.exports = router;