import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFieldTeachersComponent } from './input-field-teachers.component';

describe('InputFieldTeachersComponent', () => {
  let component: InputFieldTeachersComponent;
  let fixture: ComponentFixture<InputFieldTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFieldTeachersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputFieldTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
