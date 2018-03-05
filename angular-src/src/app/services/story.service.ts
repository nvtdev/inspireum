import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class StoryService {
  isDev: boolean;
  tags: Array<String>;
  allStories: Array<Object>;
  allUpdates: Array<Object>;

  constructor(private http: Http) {
    this.isDev = true; // Change to false before deployment
    this.tags = [];
  }

  updateTags(tags) {
    this.tags = tags;
  }

  addStory(story) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let ep = this.prepEndpoint("stories/post");
    return this.http
      .post("stories/post", story, { headers: headers })
      .map(res => res.json());
  }

  addUpdate(update) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let ep = this.prepEndpoint("updates/post");
    return this.http
      .post("updates/post", update, { headers: headers })
      .map(res => res.json());
  }

  fetchAllStories(loggedUser) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("loggeduser", loggedUser);
    let ep = this.prepEndpoint("stories/all");
    return this.http
      .get("stories/all", { headers: headers })
      .map(res => res.json());
    // this.http
    //   .get(ep, { headers: headers })
    //   .map(res => res.json())
    //   .subscribe(data => {
    //     this.allStories = data.stories;
    //   });
  }

  fetchAllUpdates(loggedUser) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("loggeduser", loggedUser);
    let ep = this.prepEndpoint("updates/all");
    return this.http
      .get("updates/all", { headers: headers })
      .map(res => res.json());
  }

  getAllStoriesFromUser(username) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("username", username);
    let ep = this.prepEndpoint("stories/allFromUser");
    return this.http
      .get("stories/allFromUser", { headers: headers })
      .map(res => res.json());
  }

  getAllStoriesFromCurrentUser(username) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("username", username);
    let ep = this.prepEndpoint("stories/allFromCurrentUser");
    return this.http
      .get("stories/allFromCurrentUser", { headers: headers })
      .map(res => res.json());
  }

  prepEndpoint(ep) {
    if (this.isDev) {
      return "http://localhost:3000/" + ep;
    } else {
      return "http://localhost:3000/" + ep;
    }
  }
}
