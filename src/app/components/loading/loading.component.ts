import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonSpinner } from '@ionic/angular/standalone';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { hideLoading, showLoading } from 'src/app/store/loading/loading.action';
import { LoadingState } from 'src/app/store/loading/loading.reducer';

import { selectLoading } from 'src/app/store/loading/loading.selector';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  standalone: true,
  imports: [IonSpinner, CommonModule],
})
export class LoadingComponent implements OnInit {
  loadingState$!: Observable<LoadingState>;

  constructor(private _store: Store<AppState>) {}

  ngOnInit() {
    this.loadingState$ = this._store.select(selectLoading);
  }


}
