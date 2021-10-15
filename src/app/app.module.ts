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
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { ServicoComponent } from './components/servicos/servico.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import { FormularioServicoComponent } from './components/formulario-servico/formulario-servico.component';
import { FormularioServicoUpdateComponent } from './components/formulario-servico-update/formulario-servico-update.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { HomeComponent } from './components/home/home.component';
import { FormularioClienteComponent } from './components/formulario-cliente/formulario-cliente.component';
import { FormularioClienteUpdateComponent } from './components/formulario-cliente-update/formulario-cliente-update.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { FormularioUsuarioLoginComponent } from './components/formulario-usuario-login/formulario-usuario-login.component';
import { FormularioUsuarioComponent } from './components/formulario-usuario/formulario-usuario.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    ServicoComponent,
    FormularioServicoComponent,
    FormularioServicoUpdateComponent,
    ClientesComponent,
    HomeComponent,
    FormularioClienteComponent,
    FormularioClienteUpdateComponent,
    UsuariosComponent,
    FormularioUsuarioLoginComponent,
    FormularioUsuarioComponent
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
    RouterModule.forRoot([
      
      { path: '', component:  HomeComponent },
      
      { path: 'login', component: FormularioUsuarioLoginComponent},
      { path: 'cadastro', component:FormularioUsuarioComponent},

      { path: 'clientes', component:  ClientesComponent },  
      { path: 'formulario-cliente', component:  FormularioClienteComponent },
      { path: 'formulario-cliente-update', component:  FormularioClienteUpdateComponent },
      
      { path: 'servico', component:  ServicoComponent },      
      { path: 'formulario-servico', component:  FormularioServicoComponent },
      { path: 'formulario-servico-update', component:  FormularioServicoUpdateComponent }
    ]
    )
  ],
  exports: [RouterModule],
  providers: [HttpClientModule, ClienteService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
