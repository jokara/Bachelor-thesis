import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifSocietyComponent } from './notif-society.component';

describe('NotifSocietyComponent', () => {
  let component: NotifSocietyComponent;
  let fixture: ComponentFixture<NotifSocietyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifSocietyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifSocietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
