export class CV {


  private _formations: any[] ; // ok

  private _experiences: any[]; // ok

  private _competences: any[]; // ok
  private _interet: any[];
  private _information: any[];


  constructor(formation?: any[], experience?: any[], competences?: any[], interet?: any[], information?: any[]) {
    this._formations = formation;
    this._experiences = experience;

    this._competences = competences;
    this._interet = interet;
    this._information = information;
  }


  get formations(): any[] {
    return this._formations;
  }

  set formations(value: any[]) {
    this._formations = value;
  }

  get experiences(): any[] {
    return this._experiences;
  }

  set experiences(value: any[]) {
    this._experiences = value;
  }

  get competences(): any[] {
    return this._competences;
  }

  set competences(value: any[]) {
    this._competences = value;
  }

  get interet(): any[] {
    return this._interet;
  }

  set interet(value: any[]) {
    this._interet = value;
  }

  get information(): any[] {
    return this._information;
  }

  set information(value: any[]) {
    this._information = value;
  }


}
