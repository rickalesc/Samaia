import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PessoaFisicaService } from '../pessoa-fisica.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-fisica-add',
  templateUrl: './pessoa-fisica-add.component.html',
  styleUrls: ['./pessoa-fisica-add.component.css']
})
export class PessoaFisicaAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: PessoaFisicaService, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      Nome: ['', Validators.required ],
      Cpf: ['', Validators.required ],
      Email: ['', Validators.required ],
      DataNascimento: ['', Validators.required ]
    });
  }

  addPessoaFisica(Nome, Cpf, Email, DataNAscimento) {
    this.ps.addPessoaFisica(Nome, Cpf, Email, DataNAscimento);
    this.router.navigate(['pessoa-fisica']);
  }

  ngOnInit(): void {
  }

}
