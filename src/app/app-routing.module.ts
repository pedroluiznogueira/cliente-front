import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/layout/home/home.component';
import { AuthenticationComponent } from './components/layout/authentication/authentication.component';
import { FormularioUsuarioLoginComponent } from './components/conta/formulario-usuario-login/formulario-usuario-login.component';
import { FormularioUsuarioComponent } from './components/conta/formulario-usuario/formulario-usuario.component';
import { FormularioAdminLoginComponent } from './components/conta/formulario-admin-login/formulario-admin-login.component';
import { FormularioAdminComponent } from './components/conta/formulario-admin/formulario-admin.component';
import { AuthGuard } from './components/conta/comp/auth.guard';
import { MainComponent } from './components/entidades/main/main.component';
import { ProfessoresComponent } from './components/entidades/professores/professores.component';
import { ProfessorFormularioComponent } from './components/entidades/professor-formulario/professor-formulario.component';
import { ProfessorUpdateFormularioComponent } from './components/entidades/professor-update-formulario/professor-update-formulario.component';
import { ProfessorDetailsComponent } from './components/entidades/professor-details/professor-details.component';
import { CursosComponent } from './components/entidades/cursos/cursos.component';
import { FormularioCursosComponent } from './components/entidades/formulario-cursos/formulario-cursos.component';
import { FormularioCursosUpdateComponent } from './components/entidades/formulario-cursos-update/formulario-cursos-update.component';
import { CarrinhoComponent } from './components/entidades/carrinho/carrinho.component';
import { CursoDetailsComponent } from './components/entidades/curso-details/curso-details.component';
import { WishlistComponent } from './components/entidades/wishlist/wishlist.component';
import { PagamentoComponent } from './components/entidades/pagamento/pagamento.component';
import { AprendizadoComponent } from './components/entidades/aprendizado/aprendizado.component';
import { CursoAprendizadoComponent } from './components/entidades/curso-aprendizado/curso-aprendizado.component';
import { FilesComponent } from './components/entidades/files/files.component';
import { UsuarioDetailsComponent } from './components/entidades/usuario-details/usuario-details.component';
import { EnsineConoscoComponent } from './components/entidades/ensine-conosco/ensine-conosco.component';
import { ConteudoCursoComponent } from './components/entidades/conteudo-curso/conteudo-curso.component';
import { HomePlataformaComponent } from './components/layout/home-plataforma/home-plataforma.component';
import { PlataformaGuard } from './components/plataforma/comp/plataforma.guard';
import { CursosPlataformaComponent } from './components/plataforma/cursos-plataforma/cursos-plataforma.component';
import { MainPlataformaComponent } from './components/plataforma/main-plataforma/main-plataforma.component';

const routes: Routes = [  
  {
    path: '', component: HomeComponent,
    children: [       
      { path: '', component: MainComponent},  

      { path: 'professores', component:  ProfessoresComponent },
      { path: 'professor-formulario', component:  ProfessorFormularioComponent },
      { path: 'professor-update-formulario', component:  ProfessorUpdateFormularioComponent },
      { path: 'professor-details', component:  ProfessorDetailsComponent }, 

      { path: 'cursos', component:  CursosComponent },
      { path: 'curso-formulario', component:  FormularioCursosComponent },
      { path: 'curso-update-formulario', component:  FormularioCursosUpdateComponent },
      { path: 'curso-details', component:  CursoDetailsComponent },
      
      { path: 'carrinho', component: CarrinhoComponent },
      { path: 'wl', component: WishlistComponent },
      { path: 'pagamento', component: PagamentoComponent },
      { path: 'aprendizado', component: AprendizadoComponent },
      { path: 'curso-aprendizado', component: CursoAprendizadoComponent },
      { path: 'usuario-details', component: UsuarioDetailsComponent },
      { path: 'files', component: FilesComponent },     
      { path: 'ensine-conosco', component: EnsineConoscoComponent },
      { path: 'conteudo-curso', component: ConteudoCursoComponent }

    ],
    canActivate: [AuthGuard],
  },

  { 
    path: 'home-plataforma', component:  HomePlataformaComponent,
    children: [
      { path: '', component: MainPlataformaComponent},
      { path: 'cursos', component: CursosPlataformaComponent}
    ],
    canActivate: [PlataformaGuard],
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
