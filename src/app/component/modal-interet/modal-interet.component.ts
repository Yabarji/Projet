import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CentresInterets} from "../../class/centresInterets";
import {InteretsService} from "../../service/modal/interets.service";

declare var jquery: any;
declare var $: any;

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

  interets: CentresInterets;
  error = null;
  message = null;


  constructor(private fb: FormBuilder , private centreinteret: InteretsService ) { }

  ngOnInit() {
    this.name = new FormControl(null,[Validators.required]);

    this.form = this.fb.group({
      name: this.name,

    });
  }


  public onSubmitData() {

    if (this.form.valid) {

        this.tags.push( this.name.value );
        this.name.setValue(null);
        console.log('ENVOIS DANS DAO')
        console.log(this.tags);

      this.interets = new CentresInterets(this.tags);
      this.message = 'Envois en cours';


      this.centreinteret.add(this.interets).subscribe( (data) => {
        if ( data != null ) {
          this.message = null;
          $('#interets').modal('hide');
        } else {
          this.message = null;
          this.error = 'Erreur d\'envois';
        }
      }, () => {
        this.message = null;
        this.error = 'Erreur d\'envois';
      });

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
