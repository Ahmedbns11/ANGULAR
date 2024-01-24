import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { OwnersignupComponent } from './components/ownersignup/ownersignup.component';
import { OwnerloginComponent } from './components/ownerlogin/ownerlogin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AjoutmaisonsComponent } from './components/ajoutmaisons/ajoutmaisons.component';
import { AjoutchambreComponent } from './components/ajoutchambre/ajoutchambre.component';
import { Room1Component } from './components/room1/room1.component';
import { Room2Component } from './components/room2/room2.component';
import { SearchpageComponent } from './components/searchpage/searchpage.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    OwnersignupComponent,
    OwnerloginComponent,
    DashboardComponent,
    AjoutmaisonsComponent,
    AjoutchambreComponent,
    Room1Component,
    Room2Component,
    SearchpageComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
