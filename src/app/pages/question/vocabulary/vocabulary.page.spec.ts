import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularyPage } from './vocabulary.page';

describe('VocabularyPage', () => {
  let component: VocabularyPage;
  let fixture: ComponentFixture<VocabularyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocabularyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabularyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
