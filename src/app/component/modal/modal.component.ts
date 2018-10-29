import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomValidator} from "../../validator/custom-validator";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  name: FormControl;
  startDate: FormControl;
  endDate: FormControl;
  description: FormControl;
  ville: FormControl;




  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.name = new FormControl(null,[Validators.required]);
    this.startDate = new FormControl(null,[Validators.required]);
    this.endDate = new FormControl(null,[Validators.required]);
    this.description = new FormControl(null,[Validators.required]);
    this.ville = new FormControl(null,[Validators.required]);

    this.form = this.fb.group({
      name: this.name,
      startDate: this.startDate,
      endDate: this.endDate,
      description: this.description,
      ville: this.ville
    });

  }


  public onSubmitData() {

    if (this.form.valid) {


      console.log(this.form.value);
    }
  }

  public controlName(): boolean | string {
    if (this.name.touched) {
      if (this.name.hasError('required')) {
        return 'Nom required';
      }
    }
    return false;
  }

  public controlDateD(): boolean | string {
    if (this.startDate.touched) {
      if (this.startDate.hasError('required')) {
        return 'Date de debut required';
      }

    }
    return false;
  }

  public controlDateF(): boolean | string {
    if (this.endDate.touched) {
      if (this.endDate.hasError('required')) {
        return 'Date de fin required';
      }
    }
    return false;
  }

  public controlDescription(): boolean | string {
    if (this.description.touched) {
      if (this.description.hasError('required')) {
        return 'Description required';
      }
    }
    return false;
  }

  public controlVille(): boolean | string {
    if (this.ville.touched) {
      if (this.ville.hasError('required')) {
        return 'Ville required';
      }
    }
    return false;
  }

}
