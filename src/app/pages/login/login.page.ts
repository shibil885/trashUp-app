import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonInput,
  IonButton,
  IonLabel,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { LoginPageForm } from './form/login.page.form';
import { ErrorMessageComponent } from 'src/app/components/error-message/error-message.component';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { hideLoading, showLoading } from 'src/app/store/loading/loading.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonInput,
    IonItem,
    IonCardContent,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonContent,
    ErrorMessageComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class LoginPage implements OnInit {
  form!: FormGroup;
  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _store: Store<AppState>
  ) {}

  ngOnInit() {
    this.form = new LoginPageForm(this._formBuilder).createForm();
  }

  login() {
    this._router.navigate(['home']);
  }

  register() {
    this._router.navigate(['register']);
  }

  onForgotPassword() {
    this._store.dispatch(showLoading());

    setTimeout(() => {
      this._store.dispatch(hideLoading());
    }, 3000);
  }
}
