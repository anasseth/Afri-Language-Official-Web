import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThematicPage } from './thematic.page';

describe('ThematicPage', () => {
  let component: ThematicPage;
  let fixture: ComponentFixture<ThematicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThematicPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThematicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
