import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
=======
import { DashFeedComponent } from './dash-feed/dash-feed.component';
import { DashHistoryComponent } from './dash-history/dash-history.component';
import { DashRequestComponent } from './dash-request/dash-request.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"" , redirectTo:"home" , pathMatch:"full"},
  {path:"home" , component:HomeComponent},
  {path:"register" , component:RegisterComponent},
  {path:"login" , component:LoginComponent},
  {path:"feed" , component:DashFeedComponent},
  {path:"history" , component:DashHistoryComponent},
  {path:"request" , component:DashRequestComponent},
  {path:"**" , component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
>>>>>>> 27c3045274e5b17b1c0994e8ad85e4e3a4f2c994
  exports: [RouterModule]
})
export class AppRoutingModule { }
