import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PessoaFisicaListComponent } from './pessoa-fisica/pessoa-fisica-list/pessoa-fisica-list.component';
import { PessoaFisicaAddComponent } from './pessoa-fisica/pessoa-fisica-add/pessoa-fisica-add.component';
import { PessoaFisicaEditComponent } from './pessoa-fisica/pessoa-fisica-edit/pessoa-fisica-edit.component';
import { TelefoneListComponent } from './telefone/telefone-list/telefone-list.component';
import { TelefoneAddComponent } from './telefone/telefone-add/telefone-add.component';
import { TelefoneEditComponent } from './telefone/telefone-edit/telefone-edit.component';
import { PessoaFisicaService } from './pessoa-fisica/pessoa-fisica.service';
import { TelefoneService } from './telefone/Telefone.service';
import { LogradouroAddComponent } from './logradouro/logradouro-add/logradouro-add.component';
import { LogradouroEditComponent } from './logradouro/logradouro-edit/logradouro-edit.component';
import { LogradouroListComponent } from './logradouro/logradouro-list/logradouro-list.component';
import { LogradouroService } from './logradouro/logradouro.service';

@NgModule({
  declarations: [
    AppComponent,
    PessoaFisicaListComponent,
    PessoaFisicaAddComponent,
    PessoaFisicaEditComponent,
    TelefoneListComponent,
    TelefoneAddComponent,
    TelefoneEditComponent,
    LogradouroListComponent,
    LogradouroAddComponent,
    LogradouroEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PessoaFisicaService, TelefoneService, LogradouroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
