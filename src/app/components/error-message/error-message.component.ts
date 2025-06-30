import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
  standalone: true,
  imports: [IonLabel, CommonModule],
})
export class ErrorMessageComponent implements OnInit {
  @Input() message!: string;
  @Input() field!: AbstractControl;
  @Input() error!: string;
  constructor() {}

  ngOnInit() {}

  shouldShowComponent() {
    if (
      this.field?.touched &&
      this.field.errors &&
      this.field.errors[this.error]
    ) {
      return true;
    }
    return false;
  }
}
