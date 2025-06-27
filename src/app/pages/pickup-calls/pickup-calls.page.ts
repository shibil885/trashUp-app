import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-pickup-calls',
  templateUrl: './pickup-calls.page.html',
  styleUrls: ['./pickup-calls.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PickupCallsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
