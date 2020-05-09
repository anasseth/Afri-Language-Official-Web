import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammarPage } from './grammar.page';

describe('GrammarPage', () => {
  let component: GrammarPage;
  let fixture: ComponentFixture<GrammarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrammarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrammarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
