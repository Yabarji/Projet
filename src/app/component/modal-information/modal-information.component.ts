import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomValidator} from "../../validator/custom-validator";
import {InformationsService} from "../../service/modal/informations.service";
import {Informations} from "../../class/informations";

declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-modal-information',
  templateUrl: './modal-information.component.html',
  styleUrls: ['./modal-information.component.css']
})
export class ModalInformationComponent implements OnInit {
  nom: FormControl;
  prenom: FormControl;
  email: FormControl;
  adresse: FormControl;
  telephone: FormControl;
  datenaiss: FormControl;

  info: Informations;
  error = null;
  message = null;

  form: FormGroup;


  constructor(private fb: FormBuilder , private informationS: InformationsService) { }

  ngOnInit() {

    this.nom = new FormControl(null,[Validators.required]);
    this.prenom = new FormControl(null,[Validators.required]);
    this.email = new FormControl(null,[Validators.required, CustomValidator.emailValidator()]);
    this.adresse = new FormControl(null,[Validators.required]);
    this.telephone = new FormControl(null,[Validators.required, CustomValidator.telephoneValidator()]);
    this.datenaiss = new FormControl(null,[Validators.required]);

    this.form = this.fb.group({
      nom: this.nom,
      prenom: this.prenom,
      email: this.email,
      adresse: this.adresse,
      telephone: this.telephone,
      datenaiss: this.datenaiss
    });
  }

  public onSubmitData() {

    if (this.form.valid) {

      console.log('ENVOIS DANS DAO')
      console.log(this.form.value);
      if (this.form.valid) {

        this.info = new Informations(this.form.value);
        this.message = 'Envois en cours';

        this.informationS.add(this.info).subscribe( (data) => {
          if ( data != null ) {
            this.message = null;
            $('#informations').modal('hide');
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

  public controlEmail(): boolean | string {
    if (this.email.touched) {
      if (this.email.hasError('required')) {
        return 'Email required';
      }

      if (this.email.hasError('email_validator')) {
        return 'email non conforme';
      }
    }
    return false;
  }

  public controlTelephone(): boolean | string {
    if (this.telephone.touched) {
      if (this.telephone.hasError('required')) {
        return 'Telephone required';
      }

      if (this.telephone.hasError('telephone_validator')) {
        return 'Telephone non conforme';
      }
    }
    return false;
  }

  public controlNom(): boolean | string {
    if (this.nom.touched) {
      if (this.nom.hasError('required')) {
        return 'Nom required';
      }
    }
    return false;
  }

  public controlPrenom(): boolean | string {
    if (this.prenom.touched) {
      if (this.prenom.hasError('required')) {
        return 'Prenom required';
      }
    }
    return false;
  }

  public controlAdresse(): boolean | string {
    if (this.adresse.touched) {
      if (this.adresse.hasError('required')) {
        return 'Adresse required';
      }
    }
    return false;
  }

  public controlDatenaiss(): boolean | string {
    if (this.datenaiss.touched) {
      if (this.datenaiss.hasError('required')) {
        return 'Date de naissance required';
      }
    }
    return false;
  }
}
