import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointCalculatorComponent } from './point-calculator.component';

describe('PointCalculatorComponent', () => {
  let component: PointCalculatorComponent;
  let fixture: ComponentFixture<PointCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
