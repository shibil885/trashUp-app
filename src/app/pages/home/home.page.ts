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
  IonCard,
  IonCardSubtitle,
  IonCardHeader,
  IonCardContent, IonButton, IonFab, IonFabButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonFabButton, IonFab, IonButton, 
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCard,
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
    CommonModule,
    FormsModule,
  ],
})
export class HomePage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
