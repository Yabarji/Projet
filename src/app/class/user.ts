export class User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    city: string,
    street: string,
    suite: string,
    zipcode: string
  };

  constructor(obj: Object) {

    Object.assign(this, obj); // ES6
  }

  public getAddress(): string {

    return `${this.address.suite}
    ${this.address.street}
    ${this.address.zipcode}
    ${this.address.city}`;

  }
}
