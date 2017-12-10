import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleAnimationComponent } from './example-animation.component';

describe('ExampleAnimationComponent', () => {
  let component: ExampleAnimationComponent;
  let fixture: ComponentFixture<ExampleAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
