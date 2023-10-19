import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TomViajePage } from './tom-viaje.page';

describe('TomViajePage', () => {
  let component: TomViajePage;
  let fixture: ComponentFixture<TomViajePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TomViajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
