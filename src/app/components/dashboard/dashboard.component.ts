import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  maisons = [
    { nom: 'Maison 1', chambres: ['Chambre 1', 'Chambre 2'] },
    { nom: 'Maison 2', chambres: ['Chambre 3', 'Chambre 4'] }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
  }

  ajout() {
    this.router.navigate(['/ajoutmaison']);
  }
  ajouterChambre(){
    this.router.navigate(['/ajoutchambre'])
  }
}
