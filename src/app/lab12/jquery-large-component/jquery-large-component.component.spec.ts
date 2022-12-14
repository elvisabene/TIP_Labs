import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JqueryLargeComponentComponent } from './jquery-large-component.component';

describe('JqueryLargeComponentComponent', () => {
  let component: JqueryLargeComponentComponent;
  let fixture: ComponentFixture<JqueryLargeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JqueryLargeComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JqueryLargeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
