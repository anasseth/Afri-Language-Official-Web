import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsPage } from './lessons.page';

describe('LessonsPage', () => {
  let component: LessonsPage;
  let fixture: ComponentFixture<LessonsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
