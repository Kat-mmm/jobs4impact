import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoHubMainComponent } from './info-hub-main.component';

describe('InfoHubMainComponent', () => {
  let component: InfoHubMainComponent;
  let fixture: ComponentFixture<InfoHubMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoHubMainComponent]
    });
    fixture = TestBed.createComponent(InfoHubMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
