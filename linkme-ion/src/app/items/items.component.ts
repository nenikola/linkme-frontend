import { Component, OnInit, Input } from "@angular/core";
import { Item } from "./item/item.model";
import { ItemsService } from "./items.service";
import { LoadingController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.scss"]
})
export class ItemsComponent implements OnInit {
  items: Item[] = [
    // {
    //   name: "OUT CIPELE TERREX SWIFT R2 GTX",
    //   price: "16.799,00 din.",
    //   imageUrl: "https://www.djaksport.com/image.aspx?imageId=141808"
    // },
    // {
    //   name: "RUN PATIKE GEL-KAYANO 25 MEN",
    //   price: "16.499,25 din.",
    //   imageUrl: "https://www.djaksport.com/image.aspx?imageId=154236"
    // },
    // {
    //   name: "UMBRO AURA 16 IC ",
    //   price: "2490.00 din.",
    //   imageUrl:
    //     "https://www.sportvision.rs/files/images/slike_proizvoda/UMSW163103-07.jpg"
    // },
    // {
    //   name: "CONVERSE ALL STAR PLITKE ",
    //   price: "6291.00 din.",
    //   imageUrl:
    //     "https://www.sportvision.rs/files/images/slike_proizvoda/M7652C.jpg"
    // }
  ];
  constructor(
    private itemsService: ItemsService,
    private loadingController: LoadingController,
    private router: Router
  ) {}

  ngOnInit() {
    this.itemsService.getItems().then(data => {
      this.items = data;
    });
  }
  ionViewWillEnter() {
    this.itemsService.getItems().then(data => {
      this.items = data;
    });
  }
  doRefresh(): Promise<void> {
    return this.itemsService.getItems().then(data => {
      this.items = data;
      return;
    });
  }
  go(id) {
    console.log("RADDDDD");
    this.router.navigateByUrl("/tabs/tab1/item-detail/" + id);
  }
}
