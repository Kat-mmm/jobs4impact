import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',  // Scrolls to the top on navigation
      anchorScrolling: 'enabled',  // Enables fragment navigation and smooth scrolling
      scrollOffset: [0, 64],  // Adjust if there's a fixed header (optional)
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }