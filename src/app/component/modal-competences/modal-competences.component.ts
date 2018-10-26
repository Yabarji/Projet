import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {log} from "util";

@Component({
  selector: 'app-modal-competences',
  templateUrl: './modal-competences.component.html',
  styleUrls: ['./modal-competences.component.css']
})
export class ModalCompetencesComponent implements OnInit {

  name: FormControl;
  description: FormControl;
  nbDescription: number;

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.name = new FormControl(null,[Validators.required]);
    this.description = new FormControl(null,[Validators.required]);


    this.form = this.fb.group({
      name: this.name,
      description: this.description
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


  public controlDescription(): boolean | string {
    if (this.name.touched) {
      if (this.name.hasError('required')) {
        return 'Description required';
      }
    }
    return false;
  }


  public ajoutDescription(): number {
    nbDescription: this.nbDescription++;
    console.log(this.nbDescription);
    return this.nbDescription;
  }
}
