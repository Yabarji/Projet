import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import {CustomValidator} from '../../validator/custom-validator';

import {Utilisateur} from '../../class/utilisateur';



@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  errors: string[] = [];

  email: FormControl;
  password: FormControl;
  confirm: FormControl;

  form: FormGroup;

  passwordMinLength = 8;

 // user: Utilisateur = new Utilisateur(this.email, this.password);
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

// formcontrol ( defaut value , [validators], [Asynchronous Validators] )
    this.email = new FormControl(null, [Validators.required, CustomValidator.emailValidator()]);
    this.password = new FormControl(null, [Validators.required, Validators.minLength(this.passwordMinLength)]);
    this.confirm = new FormControl(null, [Validators.required, CustomValidator.confirmPassword(this.password)]);

    this.form = this.fb.group({
      email: this.email,
      password: this.password,
      confirm: this.confirm
    });

  }

  public onSubmitData() {
    if (this.form.valid) {
      console.log(this.email.value);
      console.log(this.password.value);
    }
  }

  public controlEmail(): boolean | string {
    if (this.email.touched) {
      if (this.email.hasError('required')) {
        return 'Email obligatoire';
      }

      if (this.email.hasError('email_validator')) {
        return 'Email non valide';
      }
    }
    return false;
  }

  public controlmdp(): boolean | string {
    if (this.password.touched) {
      if (this.password.hasError('required')) {
        return 'Mot de passe obligatoire' ;
      }

      if (this.password.hasError('minlength')) {
        return `Le mot de passe doit contenir au moins ${this.passwordMinLength} caractère (actuellement ${this.password.value.length} )` ;
      }
    }
    return false;
  }

  public controlcmdp(): boolean | string {
    if (this.confirm.touched) {
      if (this.confirm.hasError('required')) {
        return 'La confirmation est obligatoire';
      }

      if (this.confirm.hasError('confirm_password')) {
        return 'Le mot de passe et la confirmation ne sont pas identique';
      }
    }
    return false;
  }
}


