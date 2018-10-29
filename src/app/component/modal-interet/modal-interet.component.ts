import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-modal-interet',
  templateUrl: './modal-interet.component.html',
  styleUrls: ['./modal-interet.component.css']
})
export class ModalInteretComponent implements OnInit {

  tags: Array<string> = [];

  tagBool: boolean;

  name: FormControl;

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.name = new FormControl(null,[Validators.required]);

    this.form = this.fb.group({
      name: this.name,

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
        return 'Interet required';
      }
    }
    return false;
  }
  public addTag(): void {
    this.tags.push( this.name.value );
    this.name.setValue(null);
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
