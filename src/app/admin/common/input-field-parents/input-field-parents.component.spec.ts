import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFieldParentsComponent } from './input-field-parents.component';

describe('InputFieldParentsComponent', () => {
  let component: InputFieldParentsComponent;
  let fixture: ComponentFixture<InputFieldParentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFieldParentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputFieldParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
