import { Component, OnInit } from "@angular/core";
import { MainService } from "../../services/main.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  constructor(private mainService: MainService) {}

  ngOnInit() {}

  removeFilterTag(tag) {
    
  }
}
