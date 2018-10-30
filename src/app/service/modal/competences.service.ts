import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Competences} from "../../class/competences";

@Injectable({
  providedIn: 'root'
})
export class CompetencesService {

  constructor(private http: HttpClient) { }


  public findAll(userId: number) {
    return this.http.get( `${environment.api}/competences/${userId}` );
  }

  public find(id: number) {
    return this.http.get(`${environment.api}/competences/${id}` );
  }

  public add(competence: Competences) {

    return this.http.post(`${environment.api}/competences`, competence ) ;


  }
}
