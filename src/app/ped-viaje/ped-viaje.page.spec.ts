import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PedViajePage } from './ped-viaje.page';

describe('PedViajePage', () => {
  let component: PedViajePage;
  let fixture: ComponentFixture<PedViajePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PedViajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
