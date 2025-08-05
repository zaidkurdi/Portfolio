import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { register } from "swiper/element/bundle";
import { fadeAnimation } from "./animations"; // You’ll define this below

register();

@Component({
  selector: "app-root",
  imports: [RouterOutlet, Header, Footer],
  animations: [fadeAnimation],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }
}
