import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DadosChamadoPage } from './dados-chamado.page';

describe('DadosChamadoPage', () => {
  let component: DadosChamadoPage;
  let fixture: ComponentFixture<DadosChamadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DadosChamadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


