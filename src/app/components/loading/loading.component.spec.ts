import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoadingComponent } from './loading.component';
import { AppState } from 'src/app/store/app.state';
import { Store, StoreModule } from '@ngrx/store';
import { hideLoading, showLoading } from 'src/app/store/loading/loading.action';
import { LoadingReducer } from 'src/app/store/loading/loading.reducer';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;
  let store: Store<AppState>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        LoadingComponent,
        StoreModule.forRoot([]),
        StoreModule.forFeature('loading', LoadingReducer),
      ],
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(LoadingComponent);
    store = TestBed.inject(Store);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide loading component when it is not loading', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    store.dispatch(hideLoading());
    fixture.detectChanges()
    expect(compiled.querySelector('.backdrop')).toBeNull();
  });

  it('should show loading component when it is loading', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    store.dispatch(showLoading());
    fixture.detectChanges()
    expect(compiled.querySelector('.backdrop')).not.toBeNull();
  });
});
