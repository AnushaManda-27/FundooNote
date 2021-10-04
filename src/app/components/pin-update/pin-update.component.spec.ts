import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinUpdateComponent } from './pin-update.component';

describe('PinUpdateComponent', () => {
  let component: PinUpdateComponent;
  let fixture: ComponentFixture<PinUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
