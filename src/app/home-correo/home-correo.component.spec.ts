import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCorreoComponent } from './home-correo.component';

describe('HomeCorreoComponent', () => {
  let component: HomeCorreoComponent;
  let fixture: ComponentFixture<HomeCorreoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCorreoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
