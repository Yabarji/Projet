import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-modal-experiences',
  templateUrl: './modal-experiences.component.html',
  styleUrls: ['./modal-experiences.component.css']
})
export class ModalExperiencesComponent implements OnInit {

  name: FormControl;
  startDate: FormControl;
  endDate: FormControl;
  description: FormControl;
  entreprise: FormControl;

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {


    this.name = new FormControl(null,[Validators.required]);
    this.startDate = new FormControl(null,[Validators.required]);
    this.endDate = new FormControl(null,[Validators.required]);
    this.description = new FormControl(null,[Validators.required]);
    this.entreprise = new FormControl(null,[Validators.required]);

    this.form = this.fb.group({
      name: this.name,
      startDate: this.startDate,
      endDate: this.endDate,
      description: this.description,
      entreprise: this.entreprise
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

  public controlEntreprise(): boolean | string {
    if (this.entreprise.touched) {
      if (this.entreprise.hasError('required')) {
        return 'Entreprise required';
      }
    }
    return false;
  }

}
