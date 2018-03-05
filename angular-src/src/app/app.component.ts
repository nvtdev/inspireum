import { Component } from '@angular/core';
import { MainService } from "./services/main.service";
import { StoryService } from "./services/story.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  appUser: Object;

  constructor(
    private mainService: MainService,
    private storyService: StoryService
  ) { }
  
  ngOnInit() {
    
    if (localStorage.user) 
      this.mainService.setUser(JSON.parse(localStorage.user));

    this.storyService.fetchAllStories(this.mainService.user['username']);
  }
}
