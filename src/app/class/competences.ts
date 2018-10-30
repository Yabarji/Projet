export class Competences {

  name: string;
  tags: Array<string> = [];

  constructor(obj: Object) {
    Object.assign(this, obj);
  }
}
