import { Component, OnInit } from "@angular/core";
import { FlashMessagesService } from "angular2-flash-messages";
import { StoryService } from "../../services/story.service";
import { ValidateService } from "../../services/validate.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  title: String;
  content: String;
  user: Object;
  private: Boolean;
  newStory: Boolean;
  storiesFromUser: Object;
  storySelected: Object;
  timeframe: boolean;
  timeframeValue: Number;
  timeframeUnit: String;

  constructor(
    private flashMessage: FlashMessagesService,
    private storyService: StoryService,
    private validateService: ValidateService,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.user);
    this.private = false;
    this.newStory = true;
    this.timeframe = false;
    this.timeframeUnit = "";
    this.storyService
      .getAllStoriesFromCurrentUser(this.user["username"])
      .subscribe(data => {
        this.storiesFromUser = data.stories;
      });
  }

  onStorySubmit() {
    console.log(this.newStory);
    console.log(this.timeframeUnit);
    return;
    if (this.newStory) {
      const story = {
        title: this.title,
        content: this.content,
        author: this.user["username"],
        private: this.private,
        tags: this.storyService.tags.join()
      };

      if (!this.validateService.validateStoryTitle(story)) {
        this.flashMessage.show("Please specify a title", {
          cssClass: "alert-danger",
          timeout: 3000
        });
        return false;
      }

      if (!this.validateService.validateStoryContent(story)) {
        this.flashMessage.show("Please add content", {
          cssClass: "alert-danger",
          timeout: 3000
        });
        return false;
      }

      this.storyService.addStory(story).subscribe(data => {
        if (data.success) {
          this.flashMessage.show(data.msg, {
            cssClass: "alert-success",
            timeout: 3000
          });
          console.log(data);
          // this.router.navigate(['/']);
        } else {
          this.flashMessage.show(data.msg, {
            cssClass: "alert-danger",
            timeout: 3000
          });
          console.log(data);
          // this.router.navigate(['/post']);
        }
      });
    } else {
      if (!this.validateService.validateStorySelected(this.storySelected)) {
        this.flashMessage.show("Please select story to update", {
          cssClass: "alert-danger",
          timeout: 3000
        });
        return false;
      }

      if (!this.validateService.validateStoryContent(this)) {
        this.flashMessage.show("Please add content", {
          cssClass: "alert-danger",
          timeout: 3000
        });
        return false;
      }

      const update = {
        content: this.content,
        author: this.user["username"],
        private: this.private,
        storyId: this.storySelected["_id"],
        tags: this.storyService.tags.join()
      };

      this.storyService.addUpdate(update).subscribe(data => {
        if (data.success) {
          this.flashMessage.show(data.msg, {
            cssClass: "alert-success",
            timeout: 3000
          });
          console.log(data);
          // this.router.navigate(['/']);
        } else {
          this.flashMessage.show(data.msg, {
            cssClass: "alert-danger",
            timeout: 3000
          });
          console.log(data);
          // this.router.navigate(['/post']);
        }
      });
    }
  }

  changePrivacy() {
    this.private = !this.private;
    console.log(this.private);
  }

  changeStatus(status) {
    this.newStory = status;
  }

  storySelectChange(story) {
    console.log(1111);
    console.log(story);
  }

  addTimeframe () {
    console.log('test');
  }
}
