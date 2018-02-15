import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class MainService {
  isDev: boolean;
  user: Object;

  constructor(private http: Http) {
    this.isDev = true; // Change to false before deployment
  }

  getUserByUsername(username) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append("user", username);
    let ep = this.prepEndpoint('users/profile');
    return this.http.get(ep, {headers: headers})
      .map(res => res.json());
  }
  
  getUser() {
    return this.user;
  }

  setUser(user) {
    this.user = user;
  }

  addFollow(follow) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let ep = this.prepEndpoint("follows/add");
    return this.http
      .post(ep, follow, { headers: headers })
      .map(res => res.json());
  }

  removeFollow(follow) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let ep = this.prepEndpoint("follows/remove");
    return this.http
      .post(ep, follow, { headers: headers })
      .map(res => res.json());
  }

  // get both followings and followers for user
  getFollowDataForUser(user) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("user", user);
    let ep = this.prepEndpoint("follows/allForUser");
    return this.http.get(ep, { headers: headers }).map(res => res.json());
  }

  // get all authors a user follows
  getFollowingsFromUser(user) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("user", user);
    let ep = this.prepEndpoint("follows/followingsFromUser");
    return this.http.get(ep, { headers: headers }).map(res => res.json());
  }

  prepEndpoint(ep) {
    if (this.isDev) {
      return "http://localhost:3000/" + ep;
    } else {
      return "http://localhost:3000/" + ep;
    }
  }

}
