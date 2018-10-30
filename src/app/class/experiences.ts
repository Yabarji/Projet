export class Experiences {

  name: string;
  entreprise: string;
  startDate: Date;
  endDate: Date;
  description: string;
  constructor(obj: Object) {
    Object.assign(this, obj);
  }
}

