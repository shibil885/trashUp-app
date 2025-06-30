import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class LoginPageForm {
  constructor(private _formBuilder: FormBuilder) {}

  createForm(): FormGroup {
    return this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
}
