import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Formations} from "../../class/Formations";
import {CentresInterets} from "../../class/centresInterets";
import {InteretsService} from "../../service/modal/interets.service";
import {FormationsService} from "../../service/modal/formations.service";

declare var jquery: any;
declare var $: any;

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

  forma: Formations;
  error = null;
  message = null;

  constructor(private fb: FormBuilder  , private FormationS: FormationsService) { }

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
      console.log('ENVOIS DANS DAO')
      console.log(this.form.value);
      if (this.form.valid) {

        this.forma = new Formations(this.form.value);
        this.message = 'Envois en cours';

        this.FormationS.add(this.forma).subscribe( (data) => {
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
