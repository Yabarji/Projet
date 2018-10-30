import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {log} from "util";
import {parse} from "ts-node";

@Component({
  selector: 'app-modal-competences',
  templateUrl: './modal-competences.component.html',
  styleUrls: ['./modal-competences.component.css']
})
export class ModalCompetencesComponent implements OnInit {

  tags: Array<string> = [];

  tagBool: boolean;

  name: FormControl;
  description: FormControl;
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.name = new FormControl(null, [Validators.required]);
    this.description = new FormControl(null, [Validators.required]);


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
    if (this.description.touched) {
      if (this.description.hasError('required')) {
        return 'Description required';
      }
    }
    return false;
  }


  public addTag(): void {
    this.tags.push( this.description.value );
    this.description.setValue(null);
    this.tagBool= true;
    console.log(this.tagBool);
  }


  public deleteTag(index: number): void {
    this.tags.splice(index, 1);

  }


  public verifTag(): boolean {

    console.log('je suis entrer et ma valeur est de :');
    console.log(this.tagBool);
    if (this.tagBool) {
      this.tagBool = false;
      return false;
    }
    this.tagBool= false;
    return true;
  }

}
