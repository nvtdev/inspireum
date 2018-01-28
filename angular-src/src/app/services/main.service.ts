import { Injectable } from "@angular/core";

@Injectable()
export class MainService {
  filterTags: Array<String>;

  constructor() {
    this.filterTags = [];
  }
}
