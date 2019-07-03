import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Item } from "./item/item.model";
import { resolve } from "url";

@Injectable({
  providedIn: "root"
})
export class ItemsService {
  items: Item[] = [];
  constructor(private http: HttpClient) {}

  getItems(): Promise<Item[]> {
    return new Promise<Item[]>((res, rej) => {
      this.http
        .get<Item[]>(
          "https://heroky-nik.herokuapp.com/items?api_key=DoXHwSAhJuQErIBfRg1mK3pDsQq2",
          {
            responseType: "json"
          }
        )
        .subscribe(data => {
          this.items = data;
          console.log("ITEMS:", this.items);
          res(data);
        });
    });
  }

  getItem(itemId: string): Item {
    if (!this.items) this.getItems().then(data => (this.items = data));
    return this.items.find(item => {
      return item.id.toString() === itemId;
    });
  }
  submitNewURL(url: string): Promise<void> {
    return new Promise((res, rej) => {
      setTimeout(res, 2000);
    });
  }
}
