import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {CentresInterets} from "../../class/centresInterets";


@Injectable({
  providedIn: 'root'
})
export class InteretsService {

  constructor(private http: HttpClient) { }

  public findAll(userId: number) {
    return this.http.get( `${environment.api}/interets/${userId}` );
  }

  public find(id: number) {
    return this.http.get(`${environment.api}/interets/${id}` );
  }

  public add(interets: CentresInterets) {

    return this.http.post(`${environment.api}/interets`, interets ) ;


  }


}
