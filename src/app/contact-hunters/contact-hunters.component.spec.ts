import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactHuntersComponent } from './contact-hunters.component';

describe('ContactHuntersComponent', () => {
  let component: ContactHuntersComponent;
  let fixture: ComponentFixture<ContactHuntersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactHuntersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactHuntersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
