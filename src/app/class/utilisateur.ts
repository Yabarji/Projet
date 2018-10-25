export class Utilisateur {

  private _email: string;
  private _mdp: string;


  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get mdp(): string {
    return this._mdp;
  }

  set mdp(value: string) {
    this._mdp = value;
  }

  constructor(email: string, mdp: string) {
    this._email = email;
    this._mdp = mdp;
  }

  public getUtilisateur(): string {

    return `${this._email}
    ${this._mdp}`;

  }
}
