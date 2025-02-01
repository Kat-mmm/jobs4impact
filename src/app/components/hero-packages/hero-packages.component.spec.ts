import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroPackagesComponent } from './hero-packages.component';

describe('HeroPackagesComponent', () => {
  let component: HeroPackagesComponent;
  let fixture: ComponentFixture<HeroPackagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroPackagesComponent]
    });
    fixture = TestBed.createComponent(HeroPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
