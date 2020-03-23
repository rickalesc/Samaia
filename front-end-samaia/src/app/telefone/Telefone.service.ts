import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Telefone from './Telefone';

@Injectable({
  providedIn: 'root'
})
export class TelefoneService {
  uri = 'http://localhost:8080/telefones';

  constructor(private http: HttpClient) { }

  addTelefone(numero, ddd, pessoaId) {
    const obj = {
      numero,
      ddd,
      pessoaId
    };
    console.log(obj);
    this.http.post<Telefone>(`${this.uri}`, obj)
        .subscribe(res => console.log('Done'));
  }

  getTelefones() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editTelefone(id) {
    return this
            .http
            .get(`${this.uri}/${id}`);
  }

  updateTelefone(numero, ddd, pessoaId, id) {
      const obj = {
        numero,
        ddd,
        pessoaId
      };
      this
        .http
        .put(`${this.uri}/${id}`, obj)
        .subscribe(res => console.log('Done'));
  }

  deleteTelefone(id) {
    return this
              .http
              .delete(`${this.uri}/${id}`);
  }
}
