import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifUnregComponent } from './notif-unreg.component';

describe('NotifUnregComponent', () => {
  let component: NotifUnregComponent;
  let fixture: ComponentFixture<NotifUnregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifUnregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifUnregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
