import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JquerySimpleComponentComponent } from './jquery-simple-component.component';

describe('JquerySimpleComponentComponent', () => {
  let component: JquerySimpleComponentComponent;
  let fixture: ComponentFixture<JquerySimpleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JquerySimpleComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JquerySimpleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
