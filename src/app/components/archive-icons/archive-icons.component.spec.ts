import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveIconsComponent } from './archive-icons.component';

describe('ArchiveIconsComponent', () => {
  let component: ArchiveIconsComponent;
  let fixture: ComponentFixture<ArchiveIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
