import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Caja1Component } from './caja1.component';

describe('Caja1Component', () => {
  let component: Caja1Component;
  let fixture: ComponentFixture<Caja1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Caja1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Caja1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
