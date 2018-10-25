import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  template: `
   <header>
     <h2 class="text-center">404 - not found</h2>
     <p class="text-center"><a routerLink="/home">Retourner en cours</a></p>


     <div style="width:100%;height:0;padding-bottom:35%;position:relative;"><iframe src="https://giphy.com/embed/z9E0VKpHX4kSI" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/harry-potter-mustaches-z9E0VKpHX4kSI"></a></p>
   </header>
  `,
  styles: []
})
export class NotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
