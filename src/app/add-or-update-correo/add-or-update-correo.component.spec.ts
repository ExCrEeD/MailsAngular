import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrUpdateCorreoComponent } from './add-or-update-correo.component';

describe('AddOrUpdateCorreoComponent', () => {
  let component: AddOrUpdateCorreoComponent;
  let fixture: ComponentFixture<AddOrUpdateCorreoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrUpdateCorreoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrUpdateCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
