import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Experiences} from "../../class/experiences";

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {

  constructor(private http: HttpClient) { }


  public findAll(userId: number) {
    return this.http.get( `${environment.api}/experiences/${userId}` );
  }

  public find(id: number) {
    return this.http.get(`${environment.api}/experiences/${id}` );
  }

  public add(experience: Experiences) {

    return this.http.post(`${environment.api}/experiences`, experience ) ;


  }
}
