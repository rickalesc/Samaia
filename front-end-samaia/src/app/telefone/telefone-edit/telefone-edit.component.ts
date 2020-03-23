import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TelefoneService } from '../Telefone.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-telefone-edit',
  templateUrl: './telefone-edit.component.html',
  styleUrls: ['./telefone-edit.component.css']
})

export class TelefoneEditComponent implements OnInit {
 
  angForm: FormGroup;
  telefone: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private ps: TelefoneService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      Numero: ['', Validators.required ],
      Ddd: ['', Validators.required ]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.ps.editTelefone(params['id']).subscribe(res => {
          this.telefone = res;
      });
    });
  }

  updateTelefone(numero, ddd) {
    this.route.params.subscribe(params => {
      this.ps.updateTelefone(numero, ddd, this.route.params.value.pessoaId, params.id);
      this.router.navigate(['telefone', this.route.params.value.pessoaId]);
    });
  }
}
