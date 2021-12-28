import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptesPage } from './comptes.page';

describe('ComptesPage', () => {
  let component: ComptesPage;
  let fixture: ComponentFixture<ComptesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComptesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
