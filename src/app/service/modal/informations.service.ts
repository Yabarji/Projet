import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Formations} from "../../class/Formations";
import {Informations} from "../../class/informations";

@Injectable({
  providedIn: 'root'
})
export class InformationsService {

  constructor(private http: HttpClient) { }


  public findAll(userId: number) {
    return this.http.get( `${environment.api}/information/${userId}` );
  }

  public find(id: number) {
    return this.http.get(`${environment.api}/information/${id}` );
  }

  public add(information: Informations) {

    return this.http.post(`${environment.api}/information`, information ) ;


  }
}
