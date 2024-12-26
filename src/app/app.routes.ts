import { InicialComponent } from './inicial/inicial.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { ParticipacoesComponent } from './participacoes/participacoes.component';
import { ContatoComponent } from './contato/contato.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', component: InicialComponent },
    { path: 'projetos', component: ProjetosComponent },
    { path: 'sobre-nos', component: SobreNosComponent },
    { path: 'participacoes', component: ParticipacoesComponent },
    { path: 'contato', component: ContatoComponent }
];