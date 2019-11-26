import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { BodyComponent } from "./body/body.component";
import { FooterComponent } from "./footer/footer.component";
import { NavigationComponent } from "./header/navigation/navigation.component";
import { CarouselSlideComponent } from "./body/carousel-slide/carousel-slide.component";
import { JumbotronComponent } from "./body/jumbotron/jumbotron.component";
import { WelcomeComponent } from "./body/welcome/welcome.component";
import { FamilyComponent } from "./body/family/family.component";
import { ExtraComponent } from "./body/extra/extra.component";
import { SocialMediaComponent } from "./footer/social-media/social-media.component";
import { FooterAboutMeComponent } from "./footer/footer-about-me/footer-about-me.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    NavigationComponent,
    CarouselSlideComponent,
    JumbotronComponent,
    WelcomeComponent,
    FamilyComponent,
    ExtraComponent,
    SocialMediaComponent,
    FooterAboutMeComponent,
    ContactFormComponent,
    HomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
