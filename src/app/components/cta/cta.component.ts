import { Component } from '@angular/core';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss']
})
export class CtaComponent {


  openDoc(): void {
    const url = 'https://forms.gle/62LESWGTqBirKCvg9';
    window.open(url, '_blank');
  }

}
