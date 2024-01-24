import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ownerlogin',
  templateUrl: './ownerlogin.component.html',
  styleUrls: ['./ownerlogin.component.css']
})
export class OwnerloginComponent {
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
    this.router.navigate(['/dashboard']);
  }


}
