import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubContactComponent } from './sub-contact.component';

describe('SubContactComponent', () => {
  let component: SubContactComponent;
  let fixture: ComponentFixture<SubContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubContactComponent]
    });
    fixture = TestBed.createComponent(SubContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
