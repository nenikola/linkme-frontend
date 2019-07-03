import { Component, OnInit } from "@angular/core";
import { ItemsService } from "../items/items.service";
import { LoadingController, AlertController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-newlink",
  templateUrl: "./newlink.component.html",
  styleUrls: ["./newlink.component.scss"]
})
export class NewlinkComponent implements OnInit {
  url: string;
  constructor(
    private itemsService: ItemsService,
    private loadingCtrl: LoadingController,
    private alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {}
  async onSubmit() {
    const ld = await this.loadingCtrl.create({ spinner: "circles" });
    await ld.present();
    this.itemsService.submitNewURL(this.url).then(none => {
      ld.dismiss();
      this.router.navigateByUrl("/tabs/tab1");
    });
  }
}
