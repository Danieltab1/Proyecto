import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Homepage } from './home.page';

describe('Homepage', () => {
  let componente: Homepage;
  let fixture: ComponentFixture<Homepage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(Homepage);
    componente = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(componente).toBeTruthy();
  });
});