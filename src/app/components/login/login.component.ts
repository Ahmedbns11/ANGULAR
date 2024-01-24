import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router){}
  user = {
    email: '',
    password: ''
  };

  onSubmit() {
    if (this.user.email && this.user.password) {
      console.log('Connexion réussie!');
    } else {
      console.log('Veuillez remplir tous les champs.');
    }
    this.router.navigate(["/home"])
  }
}
