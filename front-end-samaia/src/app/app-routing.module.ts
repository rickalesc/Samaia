import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoaFisicaListComponent } from './pessoa-fisica/pessoa-fisica-list/pessoa-fisica-list.component';
import { PessoaFisicaAddComponent } from './pessoa-fisica/pessoa-fisica-add/pessoa-fisica-add.component';
import { PessoaFisicaEditComponent } from './pessoa-fisica/pessoa-fisica-edit/pessoa-fisica-edit.component';
import { TelefoneListComponent } from './telefone/telefone-list/telefone-list.component';
import { TelefoneAddComponent } from './telefone/telefone-add/telefone-add.component';
import { TelefoneEditComponent } from './telefone/telefone-edit/telefone-edit.component';
import { LogradouroListComponent } from './logradouro/logradouro-list/logradouro-list.component';
import { LogradouroAddComponent } from './logradouro/logradouro-add/logradouro-add.component';
import { LogradouroEditComponent } from './logradouro/logradouro-edit/logradouro-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/pessoa-fisica',
    pathMatch: 'full'
  },
  {
    path: 'pessoa-fisica/create',
    component: PessoaFisicaAddComponent
  },
  {
    path: 'pessoa-fisica/edit/:id',
    component: PessoaFisicaEditComponent
  },
  {
    path: 'pessoa-fisica',
    component: PessoaFisicaListComponent
  },
  {
    path: 'telefone/:id',
    component: TelefoneListComponent
  },
  {
    path: 'telefone/create/:id',
    component: TelefoneAddComponent
  },
  {
    path: 'telefone/edit/:pessoaId/:id',
    component: TelefoneEditComponent
  },
  {
    path: 'logradouro/:id',
    component: LogradouroListComponent
  },
  {
    path: 'logradouro/create/:id',
    component: LogradouroAddComponent
  },
  {
    path: 'logradouro/edit/:pessoaId/:id',
    component: LogradouroEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
