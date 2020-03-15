import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Logradouro from './Logradouro';

@Injectable({
  providedIn: 'root'
})
export class LogradouroService {
  uri = process.env.API_URL
  //uri = 'http://localhost:8080/logradouros';

  constructor(private http: HttpClient) { }

  addLogradouro(logradouro, cep, bairro, cidade, uf, pessoaId) {
    const obj = {
      logradouro,
      cep,
      bairro,
      cidade,
      uf,
      pessoaId
    };
    console.log(obj);
    this.http.post<Logradouro>(`${this.uri}`, obj)
        .subscribe(res => console.log('Done'));
  }

  getLogradouros() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editLogradouro(id) {
    return this
            .http
            .get(`${this.uri}/${id}`);
  }

  updateLogradouro(logradouro, cep, bairro, cidade, uf, pessoaId, id) {
      const obj = {
        logradouro,
        cep,
        bairro,
        cidade,
        uf,
        pessoaId
      };
      this
        .http
        .put(`${this.uri}/${id}`, obj)
        .subscribe(res => console.log('Done'));
  }

  deleteLogradouro(id) {
    return this
              .http
              .delete(`${this.uri}/${id}`);
  }
}
