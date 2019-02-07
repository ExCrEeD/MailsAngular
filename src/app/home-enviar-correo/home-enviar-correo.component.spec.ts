import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEnviarCorreoComponent } from './home-enviar-correo.component';

describe('HomeEnviarCorreoComponent', () => {
  let component: HomeEnviarCorreoComponent;
  let fixture: ComponentFixture<HomeEnviarCorreoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeEnviarCorreoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEnviarCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
