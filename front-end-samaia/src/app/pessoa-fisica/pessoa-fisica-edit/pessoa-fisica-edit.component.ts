import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaFisicaService } from '../pessoa-fisica.service';

@Component({
  selector: 'app-pessoa-fisica-edit',
  templateUrl: './pessoa-fisica-edit.component.html',
  styleUrls: ['./pessoa-fisica-edit.component.css']
})

export class PessoaFisicaEditComponent implements OnInit {

angForm: FormGroup;
pessoa: any = {};

constructor(private route: ActivatedRoute, private router: Router, private ps: PessoaFisicaService, private fb: FormBuilder) {
    this.createForm();
}

createForm() {
  this.angForm = this.fb.group({
    Name: ['', Validators.required ],
    Cpf: ['', Validators.required ],
    Email: ['', Validators.required ],
    DataNascimento: ['', Validators.required ]
  });
}

ngOnInit() {
  this.route.params.subscribe(params => {
      this.ps.editPessoa(params['id']).subscribe(res => {
        this.pessoa = res;
    });
  });
}

updatePessoa(nome, cpf, email, dataNascimento) {
  this.route.params.subscribe(params => {
    this.ps.updatePessoa(nome, cpf, email, dataNascimento, params.id);
    this.router.navigate(['pessoa-fisica']);
  });
}
}
