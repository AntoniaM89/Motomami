import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DefinirHoraPrecioPage } from './definir-hora-precio.page';

describe('DefinirHoraPrecioPage', () => {
  let component: DefinirHoraPrecioPage;
  let fixture: ComponentFixture<DefinirHoraPrecioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DefinirHoraPrecioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
