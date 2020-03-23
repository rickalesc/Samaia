import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LogradouroService } from '../logradouro.service';

@Component({
  selector: 'app-logradouro-edit',
  templateUrl: './logradouro-edit.component.html',
  styleUrls: ['./logradouro-edit.component.css']
})

export class LogradouroEditComponent implements OnInit {
  
  angForm: FormGroup;
  logradouro: any = {};
  
  constructor(private route: ActivatedRoute, private router: Router, private ps: LogradouroService, private fb: FormBuilder) {
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

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.ps.editLogradouro(params['id']).subscribe(res => {
          this.logradouro = res;
      });
    });
  }
  updateLogradouro(logradouro, cep, bairro, cidade, uf) {
    this.route.params.subscribe(params => {
      this.ps.updateLogradouro(logradouro, cep, bairro, cidade, uf, this.route.params.value.pessoaId, params.id);
      this.router.navigate(['logradouro', this.route.params.value.pessoaId]);
    });
  }
}
