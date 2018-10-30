export class Formations {

  name: string;
  ville: string;
  startDate: Date;
  endDate: Date;
  description: string;


  constructor(obj: Object) {
    Object.assign(this, obj);
  }
}
