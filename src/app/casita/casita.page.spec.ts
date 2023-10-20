import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { CasitaPage } from './casita.page';

describe('CasitaPage', () => {
  let component: CasitaPage;
  let fixture: ComponentFixture<CasitaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CasitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
