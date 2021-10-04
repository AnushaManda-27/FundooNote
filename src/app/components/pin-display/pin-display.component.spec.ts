import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinDisplayComponent } from './pin-display.component';

describe('PinDisplayComponent', () => {
  let component: PinDisplayComponent;
  let fixture: ComponentFixture<PinDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
