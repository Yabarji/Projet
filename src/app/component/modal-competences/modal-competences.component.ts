import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Competences} from "../../class/competences";
import {CompetencesService} from "../../service/modal/competences.service";

declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-modal-competences',
  templateUrl: './modal-competences.component.html',
  styleUrls: ['./modal-competences.component.css']
})
export class ModalCompetencesComponent implements OnInit {

  tags: Array<string> = [];
  _tags = [];

  tagBool: boolean;

  name: FormControl;
  description: FormControl;
  form: FormGroup;

  comp: Competences;
  error = null;
  message = null;

  constructor(private fb: FormBuilder, private competenceS: CompetencesService) { }

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
      this.tags.push( this.description.value );
      this.description.setValue(null);

      this._tags.push(this.name.value);
      this._tags.push(this.tags);


      console.log('ENVOIS DANS DAO')
      console.log(this._tags);
      console.log('LISTE DES DESCRIPTION')
      console.log(this.tags);
      console.log('FORMULAIRE')
      console.log(this.form.value);




      if (this.form.valid) {

        this.comp = new Competences(this._tags);
        this.message = 'Envois en cours';

        this.competenceS.add(this.comp).subscribe( (data) => {
          if ( data != null ) {
            this.message = null;
            $('#competences').modal('hide');
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

  }


  public deleteTag(index: number): void {
    this.tags.splice(index, 1);

  }


  public verifTag(): boolean {


    if (this.tagBool) {
      this.tagBool = false;
      return false;
    }
    this.tagBool= false;
    return true;
  }

}
