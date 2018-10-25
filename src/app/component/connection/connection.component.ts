import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import {CustomValidator} from '../../validator/custom-validator';
@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  email: FormControl;
  password: FormControl;


  form: FormGroup;

  passwordMinLength = 8;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.email = new FormControl(null, [Validators.required, CustomValidator.emailValidator()]);
    this.password = new FormControl(null, [Validators.required, Validators.minLength(this.passwordMinLength)]);

    this.form = this.fb.group({
      email: this.email,
      password: this.password
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
        return 'Email non valide ';
      }
    }
    return false;
  }

  public controlmdp(): boolean | string {
    if (this.password.touched) {
      if (this.password.hasError('required')) {
        return 'mot de passe requis' ;
      }

      if (this.password.hasError('minlength')) {
        return `mot de passe trop petit... Il doit faire ${this.passwordMinLength} mininmum .. il fait ${this.password.value.length} charactere ` ;
      }
    }
    return false;
  }

}
