import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFieldStudentsMarksComponent } from './input-field-students-marks.component';

describe('InputFieldStudentsMarksComponent', () => {
  let component: InputFieldStudentsMarksComponent;
  let fixture: ComponentFixture<InputFieldStudentsMarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFieldStudentsMarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputFieldStudentsMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
