import {Component, OnInit} from '@angular/core';
import {CV} from '../../class/cv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent implements OnInit {

  cv: CV = new CV();


  constructor() {
  }

  ngOnInit() {
    this.cv.formations = [
      {
        'dateDebut': '2017',
        'dateFin': '2018',
        'titre': 'JAVA EE',
        'description': 'Bonjour je suis une description '
      },
      {
        'dateDebut': '1588',
        'dateFin': '2369',
        'titre': 'azerty',
        'description': 'Bonjour je suis une encore une description je suis le numero deux '
      },
      {
        'dateDebut': '0',
        'dateFin': '2018',
        'titre': 'jesus',
        'description': 'salutation terriens je suis la voix du tou..*PAN !  '
      }
    ];

    this.cv.experiences = [
      {
        'dateDebut': '2017',
        'dateFin': '2018',
        'titre': 'JAVA EE',
        'description': 'Bonjour je suis une description '
      },
      {
        'dateDebut': '1588',
        'dateFin': '2369',
        'titre': 'azerty',
        'description': 'Bonjour je suis une encore une description je suis le numero deux '
      },
      {
        'dateDebut': '0',
        'dateFin': '2018',
        'titre': 'jesus',
        'description': 'salutation terriens je suis la voix du tou..*PAN !  '
      }
    ];


    this.cv.competences = [
      {
        'name': 'language',
        'tags': [ 'test', 'test', 'test', 'test', 'test', 'test' ]
      },
      {
        'name': 'framework',
        'tags': [ 'test', 'test', 'test', 'test', 'test', 'test' ]
      },
      {
        'name': 'harry potter',
        'tags': [ 'test', 'test', 'test', 'test', 'test', 'test' ]
      }
      ];


    this.cv.interet = [{ 'name': ['test', 'test', 'test', 'test', 'test', 'test'] }];

    this.cv.information = [
      {
        'name': 'Potter',
        'surname': 'harry',
        'phone': '0611849634',
        'birhday': '17/11/1993',
        'adresse': '115 rue la fontaine villeneuve d\'ascq',
        'email': 'harrypotter@hogward.fr'

      }
    ];



    this.cv.name = [
      {
        'name': 'DEVELOPPEUR JAVA EE'
      }
    ];
    console.log(this.cv);
  }


  public deletename(name: string) {

  delete this.cv.name[name];
  }


}
