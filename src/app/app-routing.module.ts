import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from "./mainpage/mainpage.component";
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '',component: MainpageComponent},
  {path: 'Contact',component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

