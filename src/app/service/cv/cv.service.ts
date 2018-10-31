import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {cv} from '../../mock/mock-cv';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor(private http: HttpClient) { }

  public findAll(userId: number) {
    return this.http.get( `${environment.api}/cv/${userId}` );
  }

  public find(id: number) {
    return this.http.get(`${environment.api}/cv/${id}` );
  }

  public fake_findAllCvByUserId(userId) {
    return cv.filter( (data) => data.user.id === userId );
  }

  public fake_findCvById(id: number) {
    return cv.find( (data) => data.id === id );
  }
}
