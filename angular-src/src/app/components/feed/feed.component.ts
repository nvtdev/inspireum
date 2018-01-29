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
  filterTag: String;
  filterTags: Array<String>;

  constructor(
    private flashMessage: FlashMessagesService,
    private storyService: StoryService,
    private mainService: MainService,
    private router: Router
  ) {}

  ngOnInit() {
    // if (localStorage.user) {
    //   this.user = JSON.parse(localStorage.user);
    //   this.storyService.getAllStories(this.user['username']).subscribe(data => {
    //     console.log(data);
    //   });
    // } else {
    //   this.storyService.getAllStories('').subscribe(data => {
    //     console.log(data);
    //   });
    // }
    this.filterTag = "";
    this.filterTags = [];
    if (localStorage.user) this.user = JSON.parse(localStorage.user);
    let loggedUser = this.user ? this.user["username"] : "";
    this.storyService.getAllStories(loggedUser).subscribe(data => {
      this.allStories = data.stories;
      this.originalStories = this.allStories;
    });
    this.storyService.getAllUpdates(loggedUser).subscribe(data => {
      this.allUpdates = data.updates;
    });
  }

  addFilterTag(tag) {
    if (!this.filterTags.includes(tag))
      this.filterTags.push(tag);
    this.filterStories();
  }

  filterStories() {
    if (this.filterTags.length == 0)
    {
      this.allStories = this.originalStories;
    } else {
      let filteredStories = [];
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
  }

  removeFilterTag(tag) {
    let index = this.filterTags.indexOf(tag, 0);
    if (index > -1) this.filterTags.splice(index, 1);
    this.filterStories();
  }
}
