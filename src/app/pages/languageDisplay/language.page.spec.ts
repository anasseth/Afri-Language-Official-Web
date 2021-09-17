import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageDisplay } from './language.page';

describe('LoginPage', () => {
  let component: LanguageDisplay;
  let fixture: ComponentFixture<LanguageDisplay>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LanguageDisplay],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageDisplay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
