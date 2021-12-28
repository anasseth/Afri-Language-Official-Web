import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeinfoPage } from './subscribeinfo.page';

describe('SubscribeinfoPage', () => {
  let component: SubscribeinfoPage;
  let fixture: ComponentFixture<SubscribeinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribeinfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
