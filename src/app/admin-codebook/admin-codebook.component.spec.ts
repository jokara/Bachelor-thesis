import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCodebookComponent } from './admin-codebook.component';

describe('AdminCodebookComponent', () => {
  let component: AdminCodebookComponent;
  let fixture: ComponentFixture<AdminCodebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCodebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCodebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
