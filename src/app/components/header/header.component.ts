import { Component, AfterViewInit } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  openGet() {
    const url = '/services';
    window.open(url, '_blank');
  }

  ngAfterViewInit(): void {
    const carouselElement = document.getElementById('carouselExampleIndicators');
    if (carouselElement) {
      new bootstrap.Carousel(carouselElement, {
        interval: 5000, // 5 seconds
        ride: 'carousel'
      });
    }
  }
}
