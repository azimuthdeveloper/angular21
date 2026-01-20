import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperCva } from './stepper-cva';

describe('StepperCva', () => {
  let component: StepperCva;
  let fixture: ComponentFixture<StepperCva>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperCva]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperCva);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
