import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecConPage } from './rec-con.page';

describe('RecConPage', () => {
  let component: RecConPage;
  let fixture: ComponentFixture<RecConPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecConPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
