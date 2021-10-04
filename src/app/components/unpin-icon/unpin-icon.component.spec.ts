import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnpinIconComponent } from './unpin-icon.component';

describe('UnpinIconComponent', () => {
  let component: UnpinIconComponent;
  let fixture: ComponentFixture<UnpinIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnpinIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnpinIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
