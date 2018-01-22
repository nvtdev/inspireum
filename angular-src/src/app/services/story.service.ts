import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class StoryService {
  isDev:boolean;

  constructor(private http: Http) { 
    this.isDev = true; // Change to false before deployment
  }

  addStory(story) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let ep = this.prepEndpoint('stories/post');
    return this.http
      .post(ep, story, { headers: headers })
      .map(res => res.json());
  }

  addUpdate(update) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let ep = this.prepEndpoint('updates/post');
    return this.http
      .post(ep, update, { headers: headers })
      .map(res => res.json());
  }

  getAllStoriesFromUser(username){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('username', username);
    let ep = this.prepEndpoint('stories/allFromUser');
    return this.http.get(ep, {headers: headers})
      .map(res => res.json());
  }

  getAllStoriesFromCurrentUser(username){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('username', username);
    let ep = this.prepEndpoint('stories/allFromCurrentUser');
    return this.http.get(ep, {headers: headers})
      .map(res => res.json());
  }

  prepEndpoint(ep){
    if(this.isDev){
      return 'http://localhost:3000/'+ep;
    } else {
      return 'http://localhost:3000/'+ep;
    }
  }

}
