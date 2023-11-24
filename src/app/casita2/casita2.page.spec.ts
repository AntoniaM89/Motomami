import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Casita2Page } from './casita2.page';

describe('Casita2Page', () => {
  let component: Casita2Page;
  let fixture: ComponentFixture<Casita2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Casita2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
