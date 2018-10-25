import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  prv = 0;
  nxt = 0;

  date = new Date();
  object = { nom: 'potter', prenom: 'harry', pseudo: 'survivant', profession: 'sorcier'};
  user = null;
  user2 = { adresse: null };

  liste = ['jose', 'ionana', 'cindy', 'pierre', 'valentin', 'halim',
    'benjamin', 'geoffrey', 'maxime', 'christophe', 'vianney', 'sam', 'harry potter'];

  constructor() { }

  ngOnInit() {
  }

public prev(): void {

    if ( this.prv !== 0 ) {

      this.nxt = this.nxt - 5;
      this.prv = this.prv - 5;

    }
}


public next(): void {


  if ( this.prv <= this.liste.length) {

    this.nxt = this.nxt + 5;
    this.prv = this.prv + 5;
  }
}
}
