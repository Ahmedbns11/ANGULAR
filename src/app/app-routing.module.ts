import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [{path:'home' , component:HomeComponent},
{ path:'login', component:LoginComponent},
{ path:'signup',component:SignupComponent},
{ path:'ownersignup',component:OwnersignupComponent},
{ path:'ownerlogin',component:OwnerloginComponent},
{ path:'dashboard',component:DashboardComponent},
{ path:'ajoutmaison',component:AjoutmaisonsComponent},
{ path:'ajoutchambre',component:AjoutchambreComponent},
{path:'room1',component:Room1Component},
{path:'room2',component:Room2Component},
{path:'search',component:SearchpageComponent},{
  path:'',component:MainpageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
