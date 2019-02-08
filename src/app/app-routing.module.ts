import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from "./mainpage/mainpage.component";
import { HomeComponent } from './home/home.component';
import { HomeCorreoComponent } from './home-correo/home-correo.component';
import { HomeEnviarCorreoComponent } from './home-enviar-correo/home-enviar-correo.component';
import { HomeReportComponent } from './home-report/home-report.component';

const routes: Routes = [
  {path: '',component: MainpageComponent},
  {path: 'Contact',component: HomeComponent},
  {path: 'Correos',component: HomeCorreoComponent},
  {path: 'EnviarCorreo',component: HomeEnviarCorreoComponent},
  {path: 'Report',component: HomeReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

