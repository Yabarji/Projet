import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import {CustomValidator} from '../../validator/custom-validator';
import {Product} from '../../class/product';
import {Utilisateur} from '../../class/utilisateur';



@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  email: FormControl;
  password: FormControl;
  confirm: FormControl;
  term: FormControl;

  form: FormGroup;

  passwordMinLength = 8;

 // user: Utilisateur = new Utilisateur(this.email, this.password);
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

// formcontrol ( defaut value , [validators], [Asynchronous Validators] )
    this.email = new FormControl(null, [Validators.required, CustomValidator.emailValidator()]);
    this.password = new FormControl(null, [Validators.required, Validators.minLength(this.passwordMinLength)]);
    this.confirm = new FormControl(null, [Validators.required, CustomValidator.confirmPassword(this.password)]);
    this.term = new FormControl(false, [Validators.requiredTrue]);

    this.form = this.fb.group({
      email: this.email,
      password: this.password,
      confirm: this.confirm,
      term: this.term
    });

  }


  public onSubmitData() {

    if (this.form.valid) {

console.log(this.email.value);
      console.log(this.password.value);

      console.log(this.form.value);
    }
  }

  public controlEmail(): boolean | string {
    if (this.email.touched) {
      if (this.email.hasError('required')) {
        return 'Email required';
      }

      if (this.email.hasError('email_validator')) {
        return 'ta baguette est pas aux normes harry ';
      }
    }
    return false;
  }

  public controlmdp(): boolean | string {
    if (this.password.touched) {
      if (this.password.hasError('required')) {
        return 'baguette required hermignonne ...' ;
      }

      if (this.password.hasError('minlength')) {
        return `ta baguette est trop petite hermionne ... elle doit faire ${this.passwordMinLength} mininmum .. la elle fait ${this.password.value.length} cm  ` ;
      }
    }
    return false;
  }

  public controlcmdp(): boolean | string {
    if (this.confirm.touched) {
      if (this.confirm.hasError('required')) {
        return 'hermionne ta baguette doit etre confirmer.. ';
      }

      if (this.confirm.hasError('confirm_password')) {
        return 'Password != Confirm';
      }
    }
    return false;
  }

  public controlterm(): boolean | string {
    if (this.term.dirty) {
      if (this.term.hasError('required')) {
        return 'la chartre de poudlard doit etre signer ...';
      }
    }
    return false;
  }




  }


