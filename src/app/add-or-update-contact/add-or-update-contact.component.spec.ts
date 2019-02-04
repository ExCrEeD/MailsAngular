import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrUpdateContactComponent } from './add-or-update-contact.component';

describe('AddOrUpdateContactComponent', () => {
  let component: AddOrUpdateContactComponent;
  let fixture: ComponentFixture<AddOrUpdateContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrUpdateContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrUpdateContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
