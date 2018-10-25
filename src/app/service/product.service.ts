import { Injectable } from '@angular/core';
import {Product} from '../class/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  static KEY = 'products';
  products: Array<Product> = [];

  constructor() { }

  public getAll(): Array<Product> {

    const data = localStorage.getItem(ProductService.KEY);
    this.products = [];
    if ( data != null && data !== undefined) {
      for ( const item of JSON.parse(data)) {

        this.products.push(new Product(item._name, item._price));

      }
    }
    return this.products;

  }

  public update (index: number , product: Product): void {

    this.products[index] = product;
    this.save();


  }

  public add(product: Product): void {

    this.products.push( product );
    this.save();

  }

  public delete(index: number): void {
    this.products.splice(index, 1 );
    this.save();

  }

  private save(): void {

    localStorage.setItem(ProductService.KEY, JSON.stringify(this.products));

  }


}
