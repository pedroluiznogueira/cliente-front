import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { ClienteService } from './services/cliente.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { ServicoComponent } from './components/entidades/servicos/servico.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import { FormularioServicoComponent } from './components/entidades/formulario-servico/formulario-servico.component';
import { FormularioServicoUpdateComponent } from './components/entidades/formulario-servico-update/formulario-servico-update.component';
import { HomeComponent } from './components/layout/home/home.component';
import { FormularioClienteComponent } from './components/entidades/formulario-cliente/formulario-cliente.component';
import { FormularioClienteUpdateComponent } from './components/entidades/formulario-cliente-update/formulario-cliente-update.component';
import { FormularioUsuarioLoginComponent } from './components/conta/formulario-usuario-login/formulario-usuario-login.component';
import { FormularioUsuarioComponent } from './components/conta/formulario-usuario/formulario-usuario.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormularioAdminLoginComponent } from './components/conta/formulario-admin-login/formulario-admin-login.component';
import { FormularioAdminComponent } from './components/conta/formulario-admin/formulario-admin.component';
import { AuthenticationComponent } from './components/layout/authentication/authentication.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './components/entidades/main/main.component';
import { ClienteDetailsComponent } from './components/entidades/cliente-details/cliente-details.component';
import { ProfessoresComponent } from './components/entidades/professores/professores.component';
import { CursosComponent } from './components/entidades/cursos/cursos.component';


@NgModule({
  declarations: [
    AppComponent,
    ServicoComponent,
    FormularioServicoComponent,
    FormularioServicoUpdateComponent,
    HomeComponent,
    FormularioClienteComponent,
    FormularioClienteUpdateComponent,
    FormularioUsuarioLoginComponent,
    FormularioUsuarioComponent,
    FormularioAdminLoginComponent,
    FormularioAdminComponent,
    AuthenticationComponent,
    MainComponent,
    ClienteDetailsComponent,
    ProfessoresComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSnackBarModule,
    HttpClientModule,
    NgbModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule,
    FormsModule,
    RouterModule.forRoot([]),
    AppRoutingModule
  ],
  exports: [RouterModule],
  providers: [HttpClientModule, ClienteService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
