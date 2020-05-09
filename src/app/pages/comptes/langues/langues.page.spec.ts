import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguesPage } from './langues.page';

describe('LanguesPage', () => {
  let component: LanguesPage;
  let fixture: ComponentFixture<LanguesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
