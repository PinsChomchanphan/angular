import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeDynamicFilterComponent } from './pipe-dynamic-filter.component';

describe('PipeDynamicFilterComponent', () => {
  let component: PipeDynamicFilterComponent;
  let fixture: ComponentFixture<PipeDynamicFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeDynamicFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeDynamicFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
