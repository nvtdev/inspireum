import { Component, OnInit } from "@angular/core";
import { StoryService } from "../../services/story.service";

@Component({
  selector: "app-tags",
  templateUrl: "./tags.component.html",
  styleUrls: ["./tags.component.css"]
})
export class TagsComponent implements OnInit {
  tags: Array<String>;
  currentTag: String;

  constructor(private storyService: StoryService) {}

  ngOnInit() {
    this.tags = [];
    this.currentTag = "";
  }

  onFocusOut() {
    if (!this.tags.includes(this.currentTag) && this.currentTag != "") {
      this.tags.push(this.currentTag);
      this.currentTag = "";
      this.storyService.updateTags(this.tags);
    }
  }

  onTagClick(tag) {
    var index = this.tags.indexOf(tag, 0);
    if (index > -1) {
      this.tags.splice(index, 1);
      this.storyService.updateTags(this.tags);
    }
  }
}
