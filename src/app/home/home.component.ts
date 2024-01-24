import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  maisons = [
    {id:'1' ,nom: 'Maison 1', chambres: ['Chambre 1', 'Chambre 2'] },
    { id:'2', nom: 'Maison 2', chambres: ['Chambre 3', 'Chambre 4'] }
  ];
  
  constructor(private router: Router) {}

  ngOnInit() {
  }

  details(i : number) {
    
      const maisonSelectionnee = this.maisons[i];
      if(i==1){
    this.router.navigate(['/room1']);
  }
else {
  this.router.navigate(['/room2']);
}
}
}
