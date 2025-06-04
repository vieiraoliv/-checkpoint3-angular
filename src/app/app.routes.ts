

import { Routes } from '@angular/router';
import { VeiculoComponent }  from '../app/veiculos/veiculo/veiculo.component';
import { CadastroComponent } from '../app/cadastro/cadastro/cadastro.component';

export const routes: Routes = [
  { path: 'veiculos', component: VeiculoComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: '', redirectTo: 'veiculos', pathMatch: 'full' },
  { path: '**', redirectTo: 'veiculos' }
];
