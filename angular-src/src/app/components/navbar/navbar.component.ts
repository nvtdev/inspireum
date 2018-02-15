import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";
import { MainService } from "../../services/main.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  user: Object;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private mainService: MainService
  ) {}

  ngOnInit() {
    this.user = this.mainService.getUser();
  }

  onLogoutClick() {
    this.authService.logout();
    this.flashMessage.show("You are now logged out", {
      cssClass: "alert-success",
      timeout: 5000
    });
    this.router.navigate(["/"]);
    return false;
  }
}
