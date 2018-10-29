import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidator} from '../../validator/custom-validator';
import {AuthenticationService} from '../../service/authentication/authentication.service';
import {User} from '../../class/user';

declare var jquery: any;
declare var $: any;

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

  user: User;
  error = null;
  message = null;

  constructor(private fb: FormBuilder, private authification: AuthenticationService) { }

  ngOnInit() {
    this.email = new FormControl('john.doe@gmail.com', [Validators.required, CustomValidator.emailValidator()]);
    this.password = new FormControl('password', [Validators.required, Validators.minLength(this.passwordMinLength)]);

    this.form = this.fb.group({
      email: this.email,
      password: this.password
    });
  }

  public onSubmitData() {

    if (this.form.valid) {
      this.user = new User(this.form.value);
      this.message = 'Authentification en cours';

      this.authification.login(this.user).subscribe( (data) => {
        if ( data != null ) {
          this.message = null;
          $('#connexion').modal('hide');
        } else {
          this.message = null;
          this.error = 'Erreur d\'identification';
        }
      }, () => {
        this.message = null;
        this.error = 'Erreur d\'identification';
      });
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
        return `mot de passe trop petit... Il doit faire ${this.passwordMinLength}
          mininmum .. il fait ${this.password.value.length} charactere ` ;
      }
    }
    return false;
  }

}
