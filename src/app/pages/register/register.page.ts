import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonRadio,
  IonRadioGroup,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonBackButton,
  IonTabButton,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    IonBackButton,
    IonButton,
    IonInput,
    IonLabel,
    IonItem,
    IonRadioGroup,
    IonRadio,
    IonCardContent,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class RegisterPage implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit() {}

  register() {
    this._router.navigate(['home']);
  }
}
