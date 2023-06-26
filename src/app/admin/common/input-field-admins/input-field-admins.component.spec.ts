import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFieldAdminsComponent } from './input-field-admins.component';

describe('InputFieldAdminsComponent', () => {
  let component: InputFieldAdminsComponent;
  let fixture: ComponentFixture<InputFieldAdminsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFieldAdminsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputFieldAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
