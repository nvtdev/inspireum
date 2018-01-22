import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";

@Injectable()
export class StoryService {

  constructor(private http: Http) { }

  getStoriesForUser(user) {
  }

  addStory(story) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .post("http://localhost:3000/stories/post", story, { headers: headers })
      .map(res => res.json());
  }

}
