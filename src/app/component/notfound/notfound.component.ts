import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  template: `
   <header>
     <h2 class="text-center text-warning">404 - not found</h2>
     <p class="text-center"><a routerLink="/home">Retourner en cours</a></p>
   </header>
  `,
  styles: []
})
export class NotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
