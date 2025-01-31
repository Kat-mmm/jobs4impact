import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroInfoHubComponent } from './hero-info-hub.component';

describe('HeroInfoHubComponent', () => {
  let component: HeroInfoHubComponent;
  let fixture: ComponentFixture<HeroInfoHubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroInfoHubComponent]
    });
    fixture = TestBed.createComponent(HeroInfoHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
