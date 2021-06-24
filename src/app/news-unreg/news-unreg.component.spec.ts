import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsUnregComponent } from './news-unreg.component';

describe('NewsUnregComponent', () => {
  let component: NewsUnregComponent;
  let fixture: ComponentFixture<NewsUnregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsUnregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsUnregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
