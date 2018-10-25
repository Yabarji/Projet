import { Component, OnInit } from '@angular/core';
import {Product} from '../../class/product';
import {ProductService} from '../../service/product.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidator} from '../../validator/custom-validator';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  name: FormControl;
  price: FormControl;

  products: Array<Product> = [];
  form: FormGroup;
  index: number;
  selected: boolean;
  btn: string;

  constructor(public service: ProductService, private fb: FormBuilder) { }

  ngOnInit() {

    this.products = this.service.getAll();

    this.name = new FormControl(null, [Validators.required]);
    this.price = new FormControl(null, [Validators.required]);

    this.form = this.fb.group({
      name: this.name,
      price: this.price,
    });
    this.init();

  }
  public init() {
    this.index = -1;
    this.selected = false;
    this.btn = 'ajouter';
  }

  public onSubmitData() {

    if (this.form.valid) {
      console.log(this.form.value);

      if (this.selected) {
        this.service.update(this.index, new Product(this.name.value, this.price.value));
        this.init();
      } else {
        this.service.add(new Product(this.name.value, this.price.value));
      }

    }
    this.form.reset();
  }

  public onUpdateData(index: number): void {
        this.name.setValue(this.products[index].name);
          this.price.setValue(this.products[index].price);

          this.index = index;
          this.selected = true;
          this.btn = 'modifier';
  }

}
