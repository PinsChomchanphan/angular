import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesAsyncComponent } from './observables-async.component';

describe('ObservablesAsyncComponent', () => {
  let component: ObservablesAsyncComponent;
  let fixture: ComponentFixture<ObservablesAsyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservablesAsyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservablesAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
