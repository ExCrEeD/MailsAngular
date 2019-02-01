import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddorupdatecontactComponent } from './addorupdatecontact.component';

describe('AddorupdatecontactComponent', () => {
  let component: AddorupdatecontactComponent;
  let fixture: ComponentFixture<AddorupdatecontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddorupdatecontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddorupdatecontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
