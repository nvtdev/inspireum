import { Injectable } from "@angular/core";

@Injectable()
export class ValidateService {
  constructor() {}

  validateRegister(user) {
    if (
      user.name == undefined ||
      user.email == undefined ||
      user.username == undefined ||
      user.password == undefined
    )
      return false;
    else return true;
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  }

  validateStoryTitle(story) {
    if (story.title == undefined || story.title == "") {
      return false;
    } else {
      return true;
    }
  }

  validateStoryContent(story) {
    if (story.content == undefined || story.content == "") {
      return false;
    } else {
      return true;
    }
  }

  validateStorySelected(storySelected) {
    if (storySelected == undefined) {
      return false;
    } else {
      return true;
    }
  }
}
