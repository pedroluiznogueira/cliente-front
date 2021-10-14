import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { CadastroService } from './services/cliente.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { TabelaComponent } from './components/tabela/tabela.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FormularioUpdateComponent } from './components/formulario-update/formulario-update.component';
import {MatIconModule} from '@angular/material/icon';
import { ServicoComponent } from './components/servicos/servico.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import { FormularioServicoComponent } from './components/formulario-servico/formulario-servico.component';
import { FormularioServicoUpdateComponent } from './components/formulario-servico-update/formulario-servico-update.component';
import { BodyComponent } from './components/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ToolbarComponent,
    CarouselComponent,
    FooterComponent,
    TabelaComponent,
    FormularioComponent,
    FormularioUpdateComponent,
    ServicoComponent,
    FormularioServicoComponent,
    FormularioServicoUpdateComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    HttpClientModule,
    NgbModule,
    MatExpansionModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'tabela', component:  TabelaComponent },  
      { path: 'formulario', component:  FormularioComponent },
      { path: 'formulario-update', component:  FormularioUpdateComponent },
      { path: 'servico', component:  ServicoComponent },      
      { path: 'formulario-servico', component:  FormularioServicoComponent },
      { path: 'formulario-servico-update', component:  FormularioServicoUpdateComponent }
    ]
    )
  ],
  exports: [RouterModule],
  providers: [HttpClientModule, CadastroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
