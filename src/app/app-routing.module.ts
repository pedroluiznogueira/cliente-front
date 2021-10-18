import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/layout/home/home.component';
import { ClientesComponent } from './components/entidades/clientes/clientes.component';
import { FormularioClienteComponent } from './components/entidades/formulario-cliente/formulario-cliente.component';
import { FormularioClienteUpdateComponent } from './components/entidades/formulario-cliente-update/formulario-cliente-update.component';
import { ServicoComponent } from './components/entidades/servicos/servico.component';
import { FormularioServicoComponent } from './components/entidades/formulario-servico/formulario-servico.component';
import { FormularioServicoUpdateComponent } from './components/entidades/formulario-servico-update/formulario-servico-update.component';
import { AuthenticationComponent } from './components/layout/authentication/authentication.component';
import { FormularioUsuarioLoginComponent } from './components/conta/formulario-usuario-login/formulario-usuario-login.component';
import { FormularioUsuarioComponent } from './components/conta/formulario-usuario/formulario-usuario.component';
import { FormularioAdminLoginComponent } from './components/conta/formulario-admin-login/formulario-admin-login.component';
import { FormularioAdminComponent } from './components/conta/formulario-admin/formulario-admin.component';
import { AuthGuard } from './components/conta/comp/auth.guard';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [       
      { path: '', component:  FormularioUsuarioLoginComponent },

      { path: 'clientes', component:  ClientesComponent },  
      { path: 'formulario-cliente', component:  FormularioClienteComponent },
      { path: 'formulario-cliente-update', component:  FormularioClienteUpdateComponent },

      { path: 'servicos', component:  ServicoComponent }, 
      { path: 'formulario-servico', component:  FormularioServicoComponent },
      { path: 'formulario-servico-update', component:  FormularioServicoUpdateComponent }
    ],
    canActivate: [AuthGuard],
  },
  {
    path: '', component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full'},
      { path: 'login', component: FormularioUsuarioLoginComponent},
      { path: 'cadastro', component: FormularioUsuarioComponent},

      { path: 'login-admin', component: FormularioAdminLoginComponent },
      { path: 'cadastro-admin', component: FormularioAdminComponent },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
