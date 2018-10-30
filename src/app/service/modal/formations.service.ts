import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Formations} from "../../class/Formations";

@Injectable({
  providedIn: 'root'
})
export class FormationsService {

  constructor(private http: HttpClient) { }


  public findAll(userId: number) {
    return this.http.get( `${environment.api}/formations/${userId}` );
  }

  public find(id: number) {
    return this.http.get(`${environment.api}/formations/${id}` );
  }

  public add(formation: Formations) {

    return this.http.post(`${environment.api}/formations`, formation ) ;


  }
}
