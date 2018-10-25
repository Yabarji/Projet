import { Injectable } from '@angular/core';
import {Observable, Subscriber} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromobseService {

  numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor() { }


  public getPromiseNumber(): Promise<number[]> {

    const randError = Math.floor(Math.random() * 3 + 1 );
    const randTime = Math.floor(Math.random() * 5000 + 1000);

    return new Promise( (resolve, reject) => {

      setTimeout( () => {
        if (randError > 1 ) {
          resolve(this.numbers);
        } else {
          reject ('Albus est pas disponible pour le moment ...');
        }
      }, randTime);
    });

  }

  public getObservableNumber(): Observable<number[]> {

    return Observable.create( (subscriber: Subscriber<number[]>) => {

      subscriber.next(this.numbers);

      setTimeout( () => {
        subscriber.next( this.numbers.map( (value) => {
          return ( value + 10);
        } ));
      }, 2000);

      setTimeout( () => {
        subscriber.next( this.numbers.map( (value) => {
          return ( value + 10) * 10;
        } ));
        subscriber.complete();

      }, 4000);


    });
  }
}
