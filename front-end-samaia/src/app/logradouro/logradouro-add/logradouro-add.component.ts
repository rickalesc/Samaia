import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LogradouroService } from '../logradouro.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-logradouro-add',
  templateUrl: './logradouro-add.component.html',
  styleUrls: ['./logradouro-add.component.css']
})

export class LogradouroAddComponent implements OnInit {

  angForm: FormGroup;
  pessoaId: string;
  constructor(private fb: FormBuilder, private ps: LogradouroService, private router: Router, private activeRouter: ActivatedRoute) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      Logradouro: ['', Validators.required ],
      Cep: ['', Validators.required ],
      Bairro: ['', Validators.required ],
      Cidade: ['', Validators.required ],
      Uf: ['', Validators.required ]
    });
  }

  addLogradouro(Logradouro, Cep, Bairro, Cidade, Uf) {
    this.pessoaId = this.activeRouter.params.value.id;
    this.ps.addLogradouro(Logradouro, Cep, Bairro, Cidade, Uf, this.pessoaId);
    this.router.navigate(['logradouro/', this.pessoaId]);
  }

  ngOnInit(): void {
  }
}
