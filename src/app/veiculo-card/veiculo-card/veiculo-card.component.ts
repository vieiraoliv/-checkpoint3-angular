import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Veiculo } from '../../models/veiculo.model';

@Component({
  selector: 'app-veiculo-card',
  standalone: true,
  imports: [ CommonModule ],  // ← se você usar *ngIf ou outras diretivas aqui
  templateUrl: './veiculo-card.component.html',
  styleUrls: ['./veiculo-card.component.css']
})
export class VeiculoCardComponent {
  @Input() veiculo!: Veiculo;
  @Output() detalhes = new EventEmitter<Veiculo>();
}
