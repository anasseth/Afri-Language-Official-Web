import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialoguePage } from './dialogue.page';

describe('DialoguePage', () => {
  let component: DialoguePage;
  let fixture: ComponentFixture<DialoguePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialoguePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialoguePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
