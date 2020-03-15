import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import PessoaFisica from './PessoaFisica';

@Injectable({
  providedIn: 'root'
})
export class PessoaFisicaService {
  uri = process.env.API_URL
  //uri = 'http://localhost:8080/pessoafisica';

  constructor(private http: HttpClient) { }

  addPessoaFisica(nome, cpf, email, dataNascimento) {
    const obj = {
      nome,
      cpf,
      email,
      dataNascimento
    };
    console.log(obj);
    this.http.post<PessoaFisica>(`${this.uri}`, obj)
        .subscribe(res => console.log('Done'));
  }

  getPessoas() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editPessoa(id) {
    return this
            .http
            .get(`${this.uri}/${id}`);
  }

  updatePessoa(nome, cpf, email, dataNascimento, id) {
      const obj = {
        nome,
        cpf,
        email,
        dataNascimento
      };
      this
        .http
        .put(`${this.uri}/${id}`, obj)
        .subscribe(res => console.log('Done'));
  }

  deletePessoa(id) {
    return this
              .http
              .delete(`${this.uri}/${id}`);
  }
}
