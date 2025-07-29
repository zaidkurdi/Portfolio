import { Routes } from "@angular/router";
import { Content } from "./content/content";
import { About } from "./about/about";
import { Skills } from "./skills/skills";
import { Contact } from "./contact/contact";

export const routes: Routes = [
  { path: "", component: Content },
  { path: "about", component: About },
  { path: "skills", component: Skills },
  { path: "contact", component: Contact },
  { path: "**", redirectTo: "" },
];
