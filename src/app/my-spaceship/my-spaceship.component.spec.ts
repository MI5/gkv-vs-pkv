import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySpaceshipComponent } from './my-spaceship.component';

describe('MySpaceshipComponent', () => {
  let component: MySpaceshipComponent;
  let fixture: ComponentFixture<MySpaceshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySpaceshipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySpaceshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
