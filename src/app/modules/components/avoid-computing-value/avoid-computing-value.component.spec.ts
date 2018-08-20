import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvoidComputingValueComponent } from './avoid-computing-value.component';

describe('AvoidComputingValueComponent', () => {
  let component: AvoidComputingValueComponent;
  let fixture: ComponentFixture<AvoidComputingValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvoidComputingValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvoidComputingValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
