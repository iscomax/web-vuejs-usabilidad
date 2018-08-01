import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Caja3Component } from './caja3.component';

describe('Caja3Component', () => {
  let component: Caja3Component;
  let fixture: ComponentFixture<Caja3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Caja3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Caja3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
