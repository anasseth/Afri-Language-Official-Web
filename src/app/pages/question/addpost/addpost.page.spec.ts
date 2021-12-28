import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpostPage } from './addpost.page';

describe('AddpostPage', () => {
  let component: AddpostPage;
  let fixture: ComponentFixture<AddpostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpostPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
