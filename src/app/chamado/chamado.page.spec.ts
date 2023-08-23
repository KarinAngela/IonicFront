import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChamadoPage } from './chamado.page';

describe('ChamadoPage', () => {
  let component: ChamadoPage;
  let fixture: ComponentFixture<ChamadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChamadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
