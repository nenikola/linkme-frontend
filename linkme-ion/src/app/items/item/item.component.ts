import { Component, OnInit, Input } from "@angular/core";
import { Item } from "./item.model";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"]
})
export class ItemComponent implements OnInit, Item {
  @Input() name: string;
  @Input() price: string;
  @Input() imageUrl: string;
  @Input() linkUrl: string;
  @Input() id: number;

  constructor() {}

  ngOnInit() {}
}
