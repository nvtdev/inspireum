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
  allUpdates: Array<Object>;
  filterTag: String;

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
    if (localStorage.user) this.user = JSON.parse(localStorage.user);
    let loggedUser = this.user ? this.user["username"] : "";
    this.storyService.getAllStories(loggedUser).subscribe(data => {
      this.allStories = data.stories;
    });
    this.storyService.getAllUpdates(loggedUser).subscribe(data => {
      this.allUpdates = data.updates;
    });
  }

  filterStories(tag) {
    let filteredStories = [];
    for (let story of this.allStories) {
      if (story["tags"].includes(tag)) filteredStories.push(story);
    }
    this.allStories = filteredStories;
    if (!this.mainService.filterTags.includes(tag))
      this.mainService.filterTags.push(tag);
  }
}
