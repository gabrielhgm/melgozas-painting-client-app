import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./Pages/home/home.component";
import { ServicesComponent } from "./Pages/services/services.component";
import { ContactComponent } from "./Pages/contact/contact.component";
import { GalleryComponent } from "./Pages/gallery/gallery.component";
import { AboutUsComponent } from "./Pages/about-us/about-us.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "services", component: ServicesComponent },
  { path: "contact", component: ContactComponent },
  { path: "gallery", component: GalleryComponent },
  { path: "aboutus", component: AboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
