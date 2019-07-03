import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { ItemsComponent } from "./items.component";
import { ItemComponent } from "./item/item.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [ItemsComponent, ItemComponent],
  exports: [ItemsComponent]
});
export class ItemsModule {}
