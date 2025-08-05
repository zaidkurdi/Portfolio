import { Routes } from "@angular/router";
import { Content } from "./content/content";
import { About } from "./about/about";
import { Skills } from "./skills/skills";
import { Contact } from "./contact/contact";
import { Projects } from "./projects/projects";

export const routes: Routes = [
  { path: "", component: Content, data: { animation: "Home" } },
  { path: "about", component: About, data: { animation: "About" } },
  { path: "skills", component: Skills, data: { animation: "Skills" } },
  { path: "contact", component: Contact, data: { animation: "Contact" } },
  { path: "projects", component: Projects, data: { animation: "Projects" } },
  { path: "**", redirectTo: "" },
];
