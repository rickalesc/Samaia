import { Component, OnInit } from '@angular/core';
import { PessoaFisicaService } from '../pessoa-fisica.service';
import PessoaFisica from '../PessoaFisica';

@Component({
  selector: 'app-pessoa-fisica-list',
  templateUrl: './pessoa-fisica-list.component.html',
  styleUrls: ['./pessoa-fisica-list.component.css']
})
export class PessoaFisicaListComponent implements OnInit {

  pessoas:any = [];
  constructor(private ps: PessoaFisicaService) { }

  ngOnInit() {
    this.ps
      .getPessoas()
      .subscribe((data: PessoaFisica[]) => {
        console.log(data.entries);
        this.pessoas = data;
    });
  }

  deletePessoa(id) {
    this.ps.deletePessoa(id).subscribe(res => {
      this.pessoas.splice(id, 1);
    });
  }

}
