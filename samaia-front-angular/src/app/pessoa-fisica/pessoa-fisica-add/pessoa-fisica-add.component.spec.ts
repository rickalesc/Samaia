import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaFisicaAddComponent } from './pessoa-fisica-add.component';

describe('PessoaFisicaAddComponent', () => {
  let component: PessoaFisicaAddComponent;
  let fixture: ComponentFixture<PessoaFisicaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoaFisicaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaFisicaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
