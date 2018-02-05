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
  searchKey: String;

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
    this.searchKey = "";
    if (localStorage.user) this.user = JSON.parse(localStorage.user);
    let loggedUser = this.user ? this.user["username"] : "";
    this.storyService.getAllStories(loggedUser).subscribe(data => {
      this.allStories = data.stories;
      this.originalStories = this.allStories;
    });
    this.storyService.getAllUpdates(loggedUser).subscribe(data => {
      this.allUpdates = data.updates;
      console.log(this.allUpdates);
    });
  }

  addFilterTag(tag) {
    if (!this.filterTags.includes(tag))
      this.filterTags.push(tag);
    this.filterStories('tag');
  }

  filterStories(filterBy) {
    let filteredStories = [],
        searchKey = this.searchKey;

    
    switch (filterBy) 
    {
      case 'tag':
        if (this.filterTags.length == 0)
        {
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

      case 'key':
        for (let story of this.allStories) {
          Object.keys(story).forEach(function(key) {
            if (story[key].toString().includes(searchKey))
              filteredStories.push(story);
          });
        }
        this.allStories = filteredStories;
        break;
    }
    
  }

  removeFilterTag(tag) {
    let index = this.filterTags.indexOf(tag, 0);
    if (index > -1) this.filterTags.splice(index, 1);
    this.filterStories('tag');
  }

  onSearchChange() {
    if (this.searchKey.length > 2) 
      this.filterStories('key');
    else
      this.allStories = this.originalStories;
  }
}
