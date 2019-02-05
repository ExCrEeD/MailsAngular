import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from "./mainpage/mainpage.component";
import { HomeComponent } from './home/home.component';
import { CorreosComponent } from './correos/correos.component';

const routes: Routes = [
  {path: '',component: MainpageComponent},
  {path: 'Contact',component: HomeComponent},
  {path: 'Correos',component: CorreosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

