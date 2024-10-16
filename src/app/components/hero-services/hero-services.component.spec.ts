import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroServicesComponent } from './hero-services.component';

describe('HeroServicesComponent', () => {
  let component: HeroServicesComponent;
  let fixture: ComponentFixture<HeroServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroServicesComponent]
    });
    fixture = TestBed.createComponent(HeroServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
