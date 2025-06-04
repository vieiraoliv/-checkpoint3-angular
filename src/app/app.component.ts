// src/app/app.component.ts

import { Component }    from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="navbar navbar-expand navbar-dark mb-4 custom-navbar">

      <div class="container-fluid">
        <a class="navbar-brand" routerLink="/">CADASTRO DE VEÍCULOS</a>
        <div class="navbar-nav">
          <a class="nav-link text-white" routerLink="/veiculos">Lista</a>
          <a class="nav-link text-white" routerLink="/cadastro">Cadastro</a>
        </div>
      </div>
    </nav>

    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}
