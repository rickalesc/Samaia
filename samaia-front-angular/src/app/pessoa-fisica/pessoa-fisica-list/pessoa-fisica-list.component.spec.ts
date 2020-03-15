import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaFisicaListComponent } from './pessoa-fisica-list.component';

describe('PessoaFisicaListComponent', () => {
  let component: PessoaFisicaListComponent;
  let fixture: ComponentFixture<PessoaFisicaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoaFisicaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaFisicaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
