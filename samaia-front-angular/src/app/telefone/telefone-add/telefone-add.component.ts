import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TelefoneService } from '../Telefone.service';

@Component({
  selector: 'app-telefone-add',
  templateUrl: './telefone-add.component.html',
  styleUrls: ['./telefone-add.component.css']
})

export class TelefoneAddComponent implements OnInit {

  angForm: FormGroup;
  pessoaId: string;
  constructor(private fb: FormBuilder, private ps: TelefoneService, private router: Router, private activeRouter: ActivatedRoute) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      Numero: ['', Validators.required ],
      Ddd: ['', Validators.required ]
    });
  }

  addTelefone(Numero, Ddd) {
    this.pessoaId = this.activeRouter.params.value.id;
    this.ps.addTelefone(Numero, Ddd, this.pessoaId);
    this.router.navigate(['telefone/', this.pessoaId]);
  }

  ngOnInit(): void {
  }

}
