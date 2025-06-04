import { Veiculo } from './../../models/veiculo.model';
import { Component, OnInit }       from '@angular/core';
import { CommonModule }             from '@angular/common';
import { VeiculoService } from '../../services/veiculo.service';
import { VeiculoCardComponent } from '../../veiculo-card/veiculo-card/veiculo-card.component';

@Component({
  selector: 'app-veiculo',
  standalone: true,
  imports: [
    CommonModule,
    VeiculoCardComponent
  ],
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css']
})
export class VeiculoComponent implements OnInit {
  veiculos: Veiculo[] = [];

  constructor(private veiculoService: VeiculoService) {}

  ngOnInit(): void {
    this.veiculoService.getVeiculos()
      .subscribe(lista => (this.veiculos = lista));
  }

  onDetalhes(veiculo: Veiculo): void {
    alert(
      `Detalhes do veículo:\n` +
      `Marca: ${veiculo.marca}\n` +
      `Modelo: ${veiculo.modelo}\n` +
      `Ano: ${veiculo.ano}\n` +
      `Placa: ${veiculo.placa}`
    );
  }
}
