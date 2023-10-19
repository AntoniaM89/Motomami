import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenViajePage } from './gen-viaje.page';

describe('GenViajePage', () => {
  let component: GenViajePage;
  let fixture: ComponentFixture<GenViajePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GenViajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
