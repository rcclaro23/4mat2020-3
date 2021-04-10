
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoListComponent } from './curso/curso-list/curso-list.component';
import { CursoFormComponent } from './curso/curso-form/curso-form.component';

import { TurmaListComponent } from './turma/turma-list/turma-list.component';
import { TurmaFormComponent } from './turma/turma-form/turma-form.component';


import { ConsultaListComponent } from './consulta/consulta-list/consulta-list.component';
import { ConsultaFormComponent } from './consulta/consulta-form/consulta-form.component';
import { DentistaFormComponent } from './dentista/dentista-form/dentista-form.component';
import { DentistaListComponent } from './dentista/dentista-list/dentista-list.component';
import { SecretariaListComponent } from './secretaria/secretaria-list/secretaria-list.component';
import { SecretariaFormComponent } from './secretaria/secretaria-form/secretaria-form.component';






const routes: Routes = [
    // Rotas no Angular NUNCA começam com /
    { path: 'curso', component: CursoListComponent },
    { path: 'curso/novo', component: CursoFormComponent},
    { path: 'curso/:id', component: CursoFormComponent },

    { path: 'turma', component: TurmaListComponent },
    { path: 'turma/novo', component: TurmaFormComponent },
    { path: 'turma/:id', component: TurmaFormComponent },

    {path: 'cliente', component: ClienteListComponent},
    {path: 'cliente/novo', component: ClienteFormComponent},
    {path: 'cliente/:id', component: ClienteFormComponent},

    
    
    

    {path: 'consulta', component: ConsultaListComponent},
    {path: 'consulta/novo', component: ConsultaFormComponent},
    {path: 'consulta/:id', component: ConsultaFormComponent},

    {path: 'dentista', component: DentistaListComponent},
    {path: 'dentista/novo', component: DentistaFormComponent},
    {path: 'dentista/:id', component: DentistaFormComponent},

    {path: 'secretaria', component: SecretariaListComponent},
    {path: 'secretaria/novo', component: SecretariaFormComponent},
    {path: 'secretaria/:id', component: SecretariaFormComponent},

    

    






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
