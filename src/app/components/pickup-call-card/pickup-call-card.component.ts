import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  IonCard,
  IonCardContent,
  IonButton,
  IonItem,
  IonLabel,
  IonIcon,
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-pickup-call-card',
  standalone: true,
  imports: [
    IonIcon,
    IonItem,
    IonCardContent,
    IonCard,
    IonLabel,
    IonItem,
    CommonModule
  ],
  templateUrl: './pickup-call-card.component.html',
  styleUrls: ['./pickup-call-card.component.scss'],
})
export class PickupCallCardComponent {
  @Input() status!: string;
  @Input() updatedAt!: string;
  @Input() createdAt!: string;
  @Input() notes!: string;
  @Input() price!: string;

  constructor() {}

  ngOnInit() {}
}
