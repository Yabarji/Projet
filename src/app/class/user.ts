export class User {

  email: string;
  password: string;

  constructor(obj: Object) {
    Object.assign(this, obj);
  }

}
