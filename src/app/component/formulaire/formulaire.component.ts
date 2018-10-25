import {Component, OnInit} from '@angular/core';
import {Product} from '../../class/product';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  products: Array<Product> = [];
  product: Product = new Product();

  constructor() {
  }

  ngOnInit() {
  }


  public addProduct(): void {
    if (this.validForm()) {
      this.products.push(this.product);
      this.product = new Product();
    }

  }

  private validForm(): boolean {
    return this.product.name != null && this.product.price != null && !isNaN(this.product.price);
  }
}
