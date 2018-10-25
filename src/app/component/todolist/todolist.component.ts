import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  message = null;
  liste = [];

  constructor() { }

  ngOnInit() {
  }


  public ajoutlist(message: string): void {
    console.log(message);
  this.liste.push( message );


  }
  public suprlist(i: number): void {

this.liste.splice(i, 1);

  }
}
