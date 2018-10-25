import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {


  message = null;
  name = 'Harry';

  product = {name: 'hermionne', price: 12.99};
  imgSrc = 'assets/image/her.jpg';
  html = '<strong>je suis un text en gras</strong>';

  liste =['jose', 'ionana', 'cindy', 'pierre', 'valentin', 'halim', 'benjamin', 'geoffrey', 'maxime', 'christophe', 'vianney', 'sam'];


  constructor() {
  }

  ngOnInit() {
  }

  Uppercase(chaine: string, end: number = 0): string {

    if (end !== 0) {
      return chaine.substr(0, end).toUpperCase() + chaine.slice(end).toLowerCase();
    }
    return chaine.toUpperCase();

  }


  public clicked(): void {

    alert('Bravo ! 10 pts pour gryffondor !');
  }

  public confirmation(e: MouseEvent): void {
    e.preventDefault();
   console.log( confirm('es tu sur jeune sorcier ?'));
  }

  public showmessage(): void {
    alert(this.message);
  }



}
