import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Caja4Component } from './caja4.component';

describe('Caja4Component', () => {
  let component: Caja4Component;
  let fixture: ComponentFixture<Caja4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Caja4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Caja4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
