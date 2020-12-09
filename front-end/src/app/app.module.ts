// Bem no início do arquivo app.module.ts
import { NgxMaskModule, IConfig } from 'ngx-mask'
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Na seção de imports do app.module.ts
// Habilitar formatação de moeda e data em português
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);
import { MatMomentDateModule, MAT_MOMENT_DATE_FORMATS, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MainToolbarComponent } from './ui/main-toolbar/main-toolbar.component';
import { MainMenuComponent } from './ui/main-menu/main-menu.component';
import { MainFooterComponent } from './ui/main-footer/main-footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CursoListComponent } from './curso/curso-list/curso-list.component';
import { CursoFormComponent } from './curso/curso-form/curso-form.component';
import { FormsModule } from '@angular/forms';
import { TurmaListComponent } from './turma/turma-list/turma-list.component';
import { TurmaFormComponent } from './turma/turma-form/turma-form.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { AnimalListComponent } from './animal/animal-list/animal-list.component';
import { AnimalFormComponent } from './animal/animal-form/animal-form.component';
import { ConsultaListComponent } from './consulta/consulta-list/consulta-list.component';
import { ConsultaFormComponent } from './consulta/consulta-form/consulta-form.component';
import { EspecieListComponent } from './especie/especie-list/especie-list.component';
import { EspecieFormComponent } from './especie/especie-form/especie-form.component';
import { RacaListComponent } from './raca/raca-list/raca-list.component';
import { RacaFormComponent } from './raca/raca-form/raca-form.component';
import { SecretariaListComponent } from './secretaria/secretaria-list/secretaria-list.component';
import { SecretariaFormComponent } from './secretaria/secretaria-form/secretaria-form.component';
import { VeterinarioListComponent } from './veterinario/veterinario-list/veterinario-list.component';
import { VeterinarioFormComponent } from './veterinario/veterinario-form/veterinario-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainToolbarComponent,
    MainMenuComponent,
    MainFooterComponent,
    CursoListComponent,
    CursoFormComponent,
    TurmaListComponent,
    TurmaFormComponent,
    ClienteListComponent,
    ClienteFormComponent,
    AnimalListComponent,
    AnimalFormComponent,
    ConsultaListComponent,
    ConsultaFormComponent,
    EspecieListComponent,
    EspecieFormComponent,
    RacaListComponent,
    RacaFormComponent,
    SecretariaListComponent,
    SecretariaFormComponent,
    VeterinarioListComponent,
    VeterinarioFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    MatMomentDateModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    // No app.module.ts, dentro seção providers
    /**** Datas em português no MatDatepicker  ****/
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}}
    /**********************************************/      
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }