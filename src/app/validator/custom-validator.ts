import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export class CustomValidator {

  private static phone = '^(?:(?:\\+|00)33[\\s.-]{0,3}(?:\\(0\\)[\\s.-]{0,3})?|0)[1-9]' +
    '(?:(?:[\\s.-]?\\d{2}){4}|\\d{2}(?:[\\s.-]?\\d{3}){2})$';

  public static emailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value != null || control.value !== '') {
        const regexp = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}', 'i');
        return !regexp.test(control.value) ? {'email_validator': control.value} : null;
      }
    };
  }

  public static confirmPassword(otherControl: AbstractControl): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value != null || control.value !== '') {
        return control.value !== otherControl.value ? {'confirm_password': control.value} : null;
      }
    };
  }

  public static telephoneValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value != null || control.value !== '') {
        const regexp = new RegExp(CustomValidator.phone, 'i' );
        return !regexp.test(control.value) ? {'telephone_validator': control.value} : null ;
      }
    };
  }
}

