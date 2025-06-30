import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';
import { Router } from '@angular/router';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to pickup-calls on see all', () => {
    spyOn(router, 'navigate');

    component.goToPickupCalls();
    expect(router.navigate).toHaveBeenCalledWith(['pickup-calls'])
  });

  it('should go to new pickup-call on create pickup call', () => {
    spyOn(router, 'navigate');

    component.newPickupCall();
    expect(router.navigate).toHaveBeenCalledWith(['pickup-call'])
  });
});
