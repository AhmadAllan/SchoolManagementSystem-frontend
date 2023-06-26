import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFieldStudentsComponent } from './input-field-students.component';

describe('InputFieldStudentsComponent', () => {
  let component: InputFieldStudentsComponent;
  let fixture: ComponentFixture<InputFieldStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFieldStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputFieldStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
