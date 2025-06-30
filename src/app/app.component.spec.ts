import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app.component';
import { addIcons } from 'ionicons';
import {
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  heartOutline,
  heartSharp,
  archiveOutline,
  archiveSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
  bookmarkOutline,
  bookmarkSharp,
  hourglassOutline,
  add,
  checkmarkCircleOutline,
  trophy,
} from 'ionicons/icons';
import { StoreModule } from '@ngrx/store';
import { LoadingReducer } from './store/loading/loading.reducer';

describe('AppComponent', () => {
  beforeEach(async () => {
    addIcons({
      mailOutline,
      mailSharp,
      paperPlaneOutline,
      paperPlaneSharp,
      heartOutline,
      heartSharp,
      archiveOutline,
      archiveSharp,
      trashOutline,
      trashSharp,
      warningOutline,
      warningSharp,
      bookmarkOutline,
      bookmarkSharp,
      hourglassOutline,
      add,
      checkmarkCircleOutline,
      trophy,
    });

    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        StoreModule.forRoot([]),
        StoreModule.forFeature('loading', LoadingReducer),
      ],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
