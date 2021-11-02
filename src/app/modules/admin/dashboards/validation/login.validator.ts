import { AbstractControl, ValidationErrors } from '@angular/forms';

export class LoginValidator {
  static noSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).includes(' ')) {
      return { noSpace: true };
    }
    return null;
  }
}
