export class Informations {

  nom: string;
  prenom: string;
  datenaiss: Date;
  telephone: string;
  adresse: string;
  email: string;


  constructor(obj: Object) {
    Object.assign(this, obj);
  }
}
