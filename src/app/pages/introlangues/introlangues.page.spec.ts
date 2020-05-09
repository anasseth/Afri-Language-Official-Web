import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrolanguesPage } from './introlangues.page';

describe('IntrolanguesPage', () => {
  let component: IntrolanguesPage;
  let fixture: ComponentFixture<IntrolanguesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrolanguesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrolanguesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
