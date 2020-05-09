import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThematicsPage } from './thematics.page';

describe('ThematicsPage', () => {
  let component: ThematicsPage;
  let fixture: ComponentFixture<ThematicsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThematicsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThematicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
