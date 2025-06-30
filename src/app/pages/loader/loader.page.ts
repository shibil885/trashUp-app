import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonSpinner } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
  standalone: true,
  imports: [IonSpinner, IonContent, CommonModule, FormsModule],
})
export class LoaderPage implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this._router.navigate(['login']);
    }, 3000);
  }
}
