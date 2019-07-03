import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ItemsService } from "../items.service";
import { Item } from "../item/item.model";

@Component({
  selector: "app-item-detail",
  templateUrl: "./item-detail.page.html",
  styleUrls: ["./item-detail.page.scss"]
})
export class ItemDetailPage implements OnInit {
  item: Item = {
    name: "OUT CIPELE TERREX SWIFT R2 GTX",
    price: "16.799,00 din.",
    imageUrl: "https://www.djaksport.com/image.aspx?imageId=141808",
    linkUrl:
      "https://www.djaksport.com/adidas-muske-out-cipele-terrex-swift-r2-gtx-n57868",
    id: 0
  };
  constructor(
    private activatedRoute: ActivatedRoute,
    private itemsService: ItemsService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has("itemId")) {
        return;
      }
      console.log(paramMap);
      const itemId = paramMap.get("itemId");
      console.log(itemId);
      this.item = this.itemsService.getItem(itemId);
    });
  }
}
