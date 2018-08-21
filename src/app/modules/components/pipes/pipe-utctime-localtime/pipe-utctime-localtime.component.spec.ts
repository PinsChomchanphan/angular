import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeUtctimeLocaltimeComponent } from './pipe-utctime-localtime.component';

describe('PipeUtctimeLocaltimeComponent', () => {
  let component: PipeUtctimeLocaltimeComponent;
  let fixture: ComponentFixture<PipeUtctimeLocaltimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeUtctimeLocaltimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeUtctimeLocaltimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
