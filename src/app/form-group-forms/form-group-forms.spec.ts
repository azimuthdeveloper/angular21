import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupForms } from './form-group-forms';

describe('FormGroupForms', () => {
  let component: FormGroupForms;
  let fixture: ComponentFixture<FormGroupForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormGroupForms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGroupForms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
