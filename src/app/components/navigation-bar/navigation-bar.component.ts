import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {
  isMenuOpen = false; // Track the state of the menu

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Toggle the menu open/close
  }
}
