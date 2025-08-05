import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-header",
  imports: [RouterModule],
  templateUrl: "./header.html",
  styleUrl: "./header.css",
})
export class Header {
  openMenu: any = false;

  open() {
    this.openMenu = !this.openMenu;
  }

  close() {
    this.openMenu = false;
  }
}
