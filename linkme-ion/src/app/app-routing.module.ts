import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { ItemDetailPageModule } from "./items/item-detail/item-detail.module";

const routes: Routes = [
  { path: "", loadChildren: "./tabs/tabs.module#TabsPageModule" },
  {
    path: "tabs/tab1/item-detail/:itemId",
    loadChildren: "../items/item-detail/item-detail.module#ItemDetailPageModule"
  },
  { path: "auth", loadChildren: "./auth/auth.module#AuthPageModule" }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ItemDetailPageModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
