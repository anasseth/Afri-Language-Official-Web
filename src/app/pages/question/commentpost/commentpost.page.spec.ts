import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentpostPage } from './commentpost.page';

describe('CommentpostPage', () => {
  let component: CommentpostPage;
  let fixture: ComponentFixture<CommentpostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentpostPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentpostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
