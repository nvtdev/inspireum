import { Component, OnInit } from "@angular/core";
import { FlashMessagesService } from "angular2-flash-messages";
import { StoryService } from "../../services/story.service";
import { MainService } from "../../services/main.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-feed",
  templateUrl: "./feed.component.html",
  styleUrls: ["./feed.component.css"]
})
export class FeedComponent implements OnInit {
  user: Object;
  allStories: Array<Object>;
  originalStories: Array<Object>;
  allUpdates: Array<Object>;
  feedData: Array<Object>;
  filterTag: String;
  filterTags: Array<String>;
  searchKey: String;

  constructor(
    private flashMessage: FlashMessagesService,
    private storyService: StoryService,
    private mainService: MainService,
    private router: Router
  ) {}

  ngOnInit() {
    this.setInitialValues();
    this.loadData();
  }

  setInitialValues() {
    (this.filterTag = ""),
      (this.filterTags = []),
      (this.searchKey = ""),
      (this.feedData = []);

    this.user = this.mainService.getUser();
  }

  loadData() {
    let loggedUser = this.user ? this.user["username"] : "";

    if (!this.storyService.allStories) {
      this.storyService.fetchAllStories(loggedUser).subscribe(data => {
        (this.allStories = data.stories),
          (this.storyService.allStories = data.stories),
          (this.originalStories = this.allStories);
        console.log(this.allStories);

        this.storyService.fetchAllUpdates(loggedUser).subscribe(data => {
          (this.allUpdates = data.updates),
            (this.storyService.allUpdates = data.updates);

          console.log(this.allUpdates);

          this.buildFeedData();
        });
      });
    } else {
      (this.allStories = this.storyService.allStories),
        (this.originalStories = this.allStories),
        (this.allUpdates = this.storyService.allUpdates);

      this.buildFeedData();
    }
  }

  buildFeedData() {
    this.feedData = [];

    for (let story of this.allStories) {
      let latestUpdate = null,
        feedEntry = null;

      for (let update of this.allUpdates) {
        if (update["storyId"] == story["_id"]) {
          (latestUpdate = update),
            (latestUpdate.title = story["title"]),
            (latestUpdate.author = story["author"]),
            (latestUpdate.tags = story["tags"]),
            (latestUpdate.activeBackNavigation = true);
        }
      }

      if (latestUpdate) feedEntry = latestUpdate;
      else feedEntry = story;

      if (story["endDate"]) {
        let startDate = new Date(story["date"]).getTime(),
          currentDate = new Date().getTime(),
          endDate = new Date(story["endDate"]).getTime(),
          totalPeriod = endDate - startDate,
          passedPeriod = currentDate - startDate;

        (feedEntry.progress = passedPeriod / totalPeriod * 100),
          (feedEntry.daysLeft = Math.floor((endDate - currentDate) / 86400000));

        console.log(feedEntry);

        if (feedEntry.progress < 10) feedEntry.progressColor = "success";
        else if (feedEntry.progress < 75) feedEntry.progressColor = "info";
        else feedEntry.progressColor = "danger";
      }

      this.feedData.push(feedEntry);
    }
  }

  addFilterTag(tag) {
    if (!this.filterTags.includes(tag)) this.filterTags.push(tag);
    this.filterStories("tag");
  }

  filterStories(filterBy) {
    let filteredStories = [],
      searchKey = this.searchKey;

    switch (filterBy) {
      case "tag":
        if (this.filterTags.length == 0) {
          this.allStories = this.originalStories;
        } else {
          for (let story of this.allStories) {
            for (let tag of this.filterTags) {
              if (story["tags"].includes(tag)) {
                filteredStories.push(story);
                break;
              }
            }
          }
          this.allStories = filteredStories;
        }
        break;

      case "key":
        for (let story of this.allStories) {
          Object.keys(story).forEach(function(key) {
            if (story[key].toString().includes(searchKey))
              filteredStories.push(story);
          });
        }
        this.allStories = filteredStories;
        break;
    }

    this.buildFeedData();
  }

  removeFilterTag(tag) {
    let index = this.filterTags.indexOf(tag, 0);
    if (index > -1) this.filterTags.splice(index, 1);
    this.filterStories("tag");
  }

  onSearchChange() {
    if (this.searchKey.length > 2) this.filterStories("key");
    else this.allStories = this.originalStories;

    this.buildFeedData();
  }

  triggerNavigation(updateId, storyId, direction) {
    let filteredUpdates = this.allUpdates.filter(
        update => update["storyId"] === storyId
      ),
      currentUpdateIndex = filteredUpdates.findIndex(
        update => update["_id"] == updateId
      ),
      associatedStory = this.allStories.filter(
        story => story["_id"] === storyId
      )[0],
      navigatedUpdate = null;

    if (direction == "back") {
      if (filteredUpdates[currentUpdateIndex - 1])
        navigatedUpdate = filteredUpdates[currentUpdateIndex - 1];
      else {
        navigatedUpdate = associatedStory;
        // the line below is needed so that navigation doesn't disappear once user reaches OG story post
        navigatedUpdate.storyId = associatedStory["_id"];
      }
    } else {
      if (filteredUpdates[currentUpdateIndex + 1])
        navigatedUpdate = filteredUpdates[currentUpdateIndex + 1];
    }

    // check for back arrow
    if (filteredUpdates[currentUpdateIndex - 1])
      navigatedUpdate.activeBackNavigation = true;

    // check for forward arrow
    let navigatedUpdateIndex = filteredUpdates.findIndex(
      update => update["_id"] == navigatedUpdate._id
    );
    if (filteredUpdates[navigatedUpdateIndex + 1])
      navigatedUpdate.activeForwardNavigation = true;

    if (navigatedUpdate) {
      let currentUpdateIndexInFeed = this.feedData.findIndex(
        update => update["_id"] == updateId
      );
      this.feedData[currentUpdateIndexInFeed] = navigatedUpdate;
    }

    console.log(navigatedUpdate);
  }

  addFollow(author) {
    let follow = {
      follower: this.user["username"],
      author: author
    };
    this.mainService.addFollow(follow).subscribe(response => {
      this.processFollowData(response.data);
    });
  }

  removeFollow(author) {
    let follow = {
      follower: this.user["username"],
      author: author
    };
    this.mainService.removeFollow(follow).subscribe(response => {
      this.processFollowData(response.data);
    });
  }

  checkFollow(author) {
    if (this.user["followings"])
      return this.user["followings"].includes(author);
    else return false;
  }

  processFollowData(data) {
    (this.user["followings"] = []), (this.user["followers"] = []);
    for (let item of data) {
      if (this.user["username"] == item.follower)
        this.user["followings"].push(item.author);
      else this.user["followers"].push(item.follower);
    }
    localStorage.setItem("user", JSON.stringify(this.user));
    this.buildFeedData();
  }
}
