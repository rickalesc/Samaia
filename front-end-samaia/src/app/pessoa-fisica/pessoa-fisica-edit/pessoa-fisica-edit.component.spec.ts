import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaFisicaEditComponent } from './pessoa-fisica-edit.component';

describe('PessoaFisicaEditComponent', () => {
  let component: PessoaFisicaEditComponent;
  let fixture: ComponentFixture<PessoaFisicaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoaFisicaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaFisicaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
