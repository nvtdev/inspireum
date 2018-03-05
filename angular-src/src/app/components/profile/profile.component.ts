import { Component, OnInit } from "@angular/core";
import { MainService } from "../../services/main.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  sessionUser: Object;
  profileUser: Object;

  constructor(
    private mainService: MainService, 
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sessionUser = this.mainService.getUser();
    this.loadUserData();
  }

  loadUserData() {
    this.route.params.subscribe(params => {
      if (params['nickname'] != this.mainService.user['username'])
      {
        this.mainService.getUserByUsername(params['nickname']).subscribe(data => {
          this.profileUser = data.user;
        },
        err => {
          console.log(err);
          return false;
        });
      } else 
        this.profileUser = this.sessionUser;
    });
  }
}
