import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {
  searchTerm: string;  
  maisons = [
    { id: '1', nom: 'Maison 1', chambres: ['Chambre 1', 'Chambre 2'] },
    { id: '2', nom: 'Maison 2', chambres: ['Chambre 3', 'Chambre 4'] }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  search(searchTerm: string) {

    if (searchTerm=='Maison 1') {

      this.router.navigate(['/room1']);
    } else if (searchTerm == 'Maison 2') {
      this.router.navigate(['/room2']);
    }
    else{
      alert("Cette maison n'existe pas");
    }
  }
}
