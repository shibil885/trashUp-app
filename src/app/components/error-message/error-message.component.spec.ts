import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ErrorMessageComponent } from './error-message.component';
import { FormControl, FormGroup } from '@angular/forms';

describe('ErrorMessageComponent', () => {
  let component: ErrorMessageComponent;
  let fixture: ComponentFixture<ErrorMessageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ErrorMessageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show error message when field touched and has error', () => {
    component.field = new FormGroup({ anyField: new FormControl() });

    component.field.markAsTouched();
    component.field.setErrors({ anyError: true });
    component.error = 'anyError';

    expect(component.shouldShowComponent()).toBeTruthy();
  });

  it('should hide error message when toched and has no error ', () => {
    component.field = new FormGroup({ anyField: new FormControl('') });

    component.field.markAsTouched();
    component.error = 'error';

    expect(component.shouldShowComponent()).toBeFalsy();
  });

  it('should hide error message when field is not toched', () => {
    component.field = new FormGroup({ anyField: new FormControl('') });

    component.field.setErrors({ anyError: true });
    component.error = 'anyError';

    expect(component.shouldShowComponent()).toBeFalsy();
  });

  it('should hide error message when field toched and has error, but error is diffrent', () => {
    component.field = new FormGroup({ anyField: new FormControl('') });

    component.field.markAsTouched();
    component.field.setErrors({ anotherError: true });

    expect(component.shouldShowComponent()).toBeFalsy();
  });
});
