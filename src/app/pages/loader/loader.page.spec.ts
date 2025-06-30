import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { LoaderPage } from './loader.page';
import { Router } from '@angular/router';

describe('LoaderPage', () => {
  let component: LoaderPage;
  let fixture: ComponentFixture<LoaderPage>;
  let router: Router;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderPage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);

    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should go to login page after load', fakeAsync(() => {
    spyOn(router, 'navigate');

    component.ngOnInit();

    tick(3001)
    
    expect(router.navigate).toHaveBeenCalledWith(['login']);
  }));
});
