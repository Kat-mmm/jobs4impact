import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ServicesOverviewComponent } from './components/services-overview/services-overview.component';
import { FooterComponent } from './components/footer/footer.component';
import { SubContactComponent } from './components/sub-contact/sub-contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeroServicesComponent } from './components/hero-services/hero-services.component';
import { MainServicesComponent } from './components/main-services/main-services.component';
import { MainContactComponent } from './components/main-contact/main-contact.component';
import { HeroContactComponent } from './components/hero-contact/hero-contact.component';
import { NewAboutComponent } from './components/new-about/new-about.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { HeroAboutComponent } from './components/hero-about/hero-about.component';
import { AboutMainComponent } from './components/about-main/about-main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    LandingPageComponent,
    HeaderComponent,
    AboutUsComponent,
    ServicesOverviewComponent,
    FooterComponent,
    SubContactComponent,
    ServicesComponent,
    ContactComponent,
    HeroServicesComponent,
    MainServicesComponent,
    MainContactComponent,
    HeroContactComponent,
    NewAboutComponent,
    AboutUsPageComponent,
    HeroAboutComponent,
    AboutMainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
