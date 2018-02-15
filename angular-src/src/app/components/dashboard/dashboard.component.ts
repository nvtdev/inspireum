import { Component, OnInit } from '@angular/core';
import { StoryService } from "../../services/story.service";
import { MainService } from "../../services/main.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stories: Array<Object>;
  updates: Array<Object>;
  user: Object;

  constructor(
    private storyService: StoryService,
    private mainService: MainService
  ) { }

  ngOnInit() {
    this.user = this.mainService.getUser();

    this.loadData();
  }

  loadData() {
    let loggedUser = this.user ? this.user["username"] : "";

    if (!this.storyService.allStories) {
      this.storyService.fetchAllStories(loggedUser).subscribe(data => {
        this.stories = data.stories.filter(story => story.author == loggedUser),
        this.storyService.allStories = data.stories;
  
        this.storyService.fetchAllUpdates(loggedUser).subscribe(data => {
          this.updates = data.updates.filter(update => update['author'] == loggedUser),
          this.storyService.allUpdates = data.updates;
          
          console.log("FETCH");
        });
      });  
      
    } else {
      this.stories = this.storyService.allStories.filter(story => story['author'] == loggedUser),
      this.updates = this.storyService.allUpdates.filter(update => update['author'] == loggedUser);

      console.log(this.stories);
      console.log(this.updates);
    }
  }

  buildDashboard() {
    
  }

}
