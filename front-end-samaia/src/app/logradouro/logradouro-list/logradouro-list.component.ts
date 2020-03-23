import { Component, OnInit } from '@angular/core';
import { LogradouroService } from '../logradouro.service';
import Logradouro from 'src/app/logradouro/Logradouro';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-logradouro-list',
  templateUrl: './logradouro-list.component.html',
  styleUrls: ['./logradouro-list.component.css']
})
export class LogradouroListComponent implements OnInit {

  logradouros:any = [];
  pessoaId:string;
  constructor(private ps: LogradouroService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.ps
      .getLogradouros()
      .subscribe((data: Logradouro[]) => {
        console.log(data.entries);
        var responseArray = [];
        this.pessoaId = this.route.params.value.id;
        for(var i = 0; i < data.content.length; i++){
          var logradouro = data.content[i];
          if(this.pessoaId == logradouro.pessoaId){
            responseArray.push(logradouro);
          }
        }
        this.logradouros = responseArray;
    });
  }

  deleteLogradouro(id) {
    this.ps.deleteLogradouro(id).subscribe(res => {
      this.logradouros.splice(id, 1);
    });
  }

}
