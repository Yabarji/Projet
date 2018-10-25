import {ValidateFn} from 'codelyzer/walkerFactory/walkerFn';
import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export class CustomValidator {
  public static emailValidator(): ValidatorFn {


    return (control: AbstractControl): ValidationErrors | null => {
        if (control.value != null || control.value !== '') {


          const regexp = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}', 'i' );


                return !regexp.test(control.value) ? {'email_validator': control.value} : null ;
        }
    };

  }



  public static confirmPassword(otherControl: AbstractControl): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {

      if (control.value != null || control.value !== '') {




        return control.value !== otherControl.value ? {'confirm_password': control.value} : null ;
      }

    };
    }


  }

