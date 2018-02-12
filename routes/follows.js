const express = require("express");
const router = express.Router();
const Follow = require("../models/follow");
const config = require("../config/database");

// Add follow
router.post("/post", (req, res, next) => {
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
        res.json({
          success: true,
          msg: "New follow added",
          follow: follow
        });
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
  let user = req.headers.user,
      data = {followings: [], followers: []},
      error = false;

  console.log(user);
  Follow.getFollowingsFromUser(user, (err, followings) => {
    if (!err) {
      for (let following of followings) {
        data.followings.push(following.author);
      }
      Follow.getFollowersForAuthor(user, (err1, followers) => {
        if (!err1) {
          for (let follower of followers) {
            data.followers.push(follower.follower);
          }
          res.json({ success: true, data: data });
        } 
        else 
          error = true;
      });
    } 
    else 
      error = true;
  });

  if (error)
    res.json({ success: false, msg: "Failed to load data." });
});

module.exports = router;