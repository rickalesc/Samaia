import { Component, OnInit } from '@angular/core';
import { TelefoneService } from '../Telefone.service';
import Telefone from '../Telefone';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-telefone-list',
  templateUrl: './telefone-list.component.html',
  styleUrls: ['./telefone-list.component.css']
})
export class TelefoneListComponent implements OnInit {

  telefones:any = [];
  pessoaId:string;
  constructor(private ps: TelefoneService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.ps
      .getTelefones()
      .subscribe((data: Telefone[]) => {
        console.log(data.entries);
        var responseArray = [];
        this.pessoaId = this.route.params.value.id;
        for(var i = 0; i < data.content.length; i++){
          var telefone = data.content[i];
          if(this.pessoaId == telefone.pessoaId){
            responseArray.push(telefone);
          }
        }
        this.telefones = responseArray;
    });
  }

  deleteTelefone(id) {
    this.ps.deleteTelefone(id).subscribe(res => {
      this.telefones.splice(id, 1);
    });
  }

}
