import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifHuntersComponent } from './notif-hunters.component';

describe('NotifHuntersComponent', () => {
  let component: NotifHuntersComponent;
  let fixture: ComponentFixture<NotifHuntersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifHuntersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifHuntersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
