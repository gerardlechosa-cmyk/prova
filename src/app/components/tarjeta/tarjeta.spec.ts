import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarjeta } from './tarjeta';

describe('Tarjeta', () => {
  let component: Tarjeta;
  let fixture: ComponentFixture<Tarjeta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tarjeta],
    }).compileComponents();

    fixture = TestBed.createComponent(Tarjeta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
