import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSocietyComponent } from './contact-society.component';

describe('ContactSocietyComponent', () => {
  let component: ContactSocietyComponent;
  let fixture: ComponentFixture<ContactSocietyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactSocietyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSocietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
