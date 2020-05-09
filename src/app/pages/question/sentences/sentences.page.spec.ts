import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentencesPage } from './sentences.page';

describe('SentencesPage', () => {
  let component: SentencesPage;
  let fixture: ComponentFixture<SentencesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentencesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentencesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
