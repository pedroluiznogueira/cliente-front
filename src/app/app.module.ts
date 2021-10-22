import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import { HomeComponent } from './components/layout/home/home.component';
import { FormularioUsuarioLoginComponent } from './components/conta/formulario-usuario-login/formulario-usuario-login.component';
import { FormularioUsuarioComponent } from './components/conta/formulario-usuario/formulario-usuario.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormularioAdminLoginComponent } from './components/conta/formulario-admin-login/formulario-admin-login.component';
import { FormularioAdminComponent } from './components/conta/formulario-admin/formulario-admin.component';
import { AuthenticationComponent } from './components/layout/authentication/authentication.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './components/entidades/main/main.component';
import { ProfessoresComponent } from './components/entidades/professores/professores.component';
import { ProfessorFormularioComponent } from './components/entidades/professor-formulario/professor-formulario.component';
import { ProfessorUpdateFormularioComponent } from './components/entidades/professor-update-formulario/professor-update-formulario.component';
import { ProfessorDetailsComponent } from './components/entidades/professor-details/professor-details.component';
import { CursosComponent } from './components/entidades/cursos/cursos.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormularioUsuarioLoginComponent,
    FormularioUsuarioComponent,
    FormularioAdminLoginComponent,
    FormularioAdminComponent,
    AuthenticationComponent,
    MainComponent,
    ProfessoresComponent,
    ProfessorFormularioComponent,
    ProfessorUpdateFormularioComponent,
    ProfessorDetailsComponent,
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
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
