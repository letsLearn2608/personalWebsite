import { BodyComponent } from "./body/body.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FamilyComponent } from "./body/family/family.component";
import { SocialMediaComponent } from "./footer/social-media/social-media.component";
import { CarouselSlideComponent } from "./body/carousel-slide/carousel-slide.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: BodyComponent },
  { path: "profile", component: FamilyComponent },
  { path: "education", component: SocialMediaComponent },
  { path: "contact", component: ContactFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
