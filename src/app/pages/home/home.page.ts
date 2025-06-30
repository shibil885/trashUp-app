import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonMenuButton,
  IonIcon,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
  IonFab,
  IonFabButton, IonCardHeader, IonCardSubtitle, IonButton } from '@ionic/angular/standalone';
import { PickupCallCardComponent } from 'src/app/components/pickup-call-card/pickup-call-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonButton, IonCardSubtitle, IonCardHeader, 
    IonFabButton,
    IonFab,
    IonLabel,
    IonAvatar,
    IonItem,
    IonList,
    IonIcon,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonMenuButton,
    PickupCallCardComponent,
    CommonModule,
    FormsModule,
  ],
})
export class HomePage implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit() {}

  goToPickupCalls() {
    this._router.navigate(['pickup-calls'])
  }

  newPickupCall() {
    this._router.navigate(['pickup-call'])
  }
}
