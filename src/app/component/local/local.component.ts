import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {
  lang = 'en';
  date = new Date();

  constructor() { }

  ngOnInit() {
  }

  public selectLang(lang: string): void {
    this.lang = lang;
  }
}
