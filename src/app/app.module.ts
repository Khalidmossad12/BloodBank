import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashFeedComponent } from './dash-feed/dash-feed.component';
import { DashRequestComponent } from './dash-request/dash-request.component';
import { DashHistoryComponent } from './dash-history/dash-history.component';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
=======
import { NotfoundComponent } from './notfound/notfound.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
>>>>>>> 27c3045274e5b17b1c0994e8ad85e4e3a4f2c994

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    DashFeedComponent,
    DashRequestComponent,
<<<<<<< HEAD
    DashHistoryComponent
=======
    DashHistoryComponent,
    NotfoundComponent
>>>>>>> 27c3045274e5b17b1c0994e8ad85e4e3a4f2c994
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    ReactiveFormsModule
=======
    CarouselModule,
    BrowserAnimationsModule,
    RouterModule
>>>>>>> 27c3045274e5b17b1c0994e8ad85e4e3a4f2c994
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
