import {Component, OnInit} from '@angular/core';
import {PromobseService} from '../../service/promobse.service';

@Component({
  selector: 'app-promobse',
  templateUrl: './promobse.component.html',
  styleUrls: ['./promobse.component.css']
})
export class PromobseComponent implements OnInit {

  numbers: number[] = [];
  error: string = null;
  wait: string = null;

  obsNumbers: number[] = [];
  message: string = null;

  constructor(private promobse: PromobseService) {
  }

  ngOnInit() {
  }


  public getAsyncNumber(): void {
    this.numbers = [];
    this.error = null;
    this.wait = ' Appel de Fumseck en cours ... ';


    this.promobse.getPromiseNumber().then((numbers: number[]) => {
      this.numbers = numbers;

      this.wait = null;
    }).catch((error: string) => {

      this.error = error;
      this.wait = null;

    });

  }

  public getMultiNumber(): void {
    this.obsNumbers = [];
    this.message = null;

    this.promobse.getObservableNumber().subscribe( (number: number[]) => {
      this.obsNumbers = number;
    }, () => {}, () => {

      this.message = 'LUMOS MAXIMA !!';
    });
  }
}

