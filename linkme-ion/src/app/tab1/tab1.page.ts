import { Component, ViewChild } from "@angular/core";
import { ItemsComponent } from "../items/items.component";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  @ViewChild(ItemsComponent) itemsCmp: ItemsComponent;
  constructor() {}

  doRefresh(evt) {
    this.itemsCmp.doRefresh().then(val => evt.target.complete());
  }
}
