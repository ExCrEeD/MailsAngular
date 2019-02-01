import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrUpadateContactComponent } from './add-or-upadate-contact.component';

describe('AddOrUpadateContactComponent', () => {
  let component: AddOrUpadateContactComponent;
  let fixture: ComponentFixture<AddOrUpadateContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrUpadateContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrUpadateContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
