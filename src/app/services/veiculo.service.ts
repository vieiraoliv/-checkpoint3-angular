import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Veiculo } from '../models/veiculo.model';

@Injectable({ providedIn: 'root' })
export class VeiculoService {
  // Inicializa com alguns dados fictícios
  private veiculosSubject = new BehaviorSubject<Veiculo[]>([
    { marca: 'Toyota', modelo: 'Corolla', ano: 2018, placa: 'ABC-1234' },
    { marca: 'Honda',  modelo: 'Civic',   ano: 2020, placa: 'DEF-5678' }
  ]);

  getVeiculos(): Observable<Veiculo[]> {
    return this.veiculosSubject.asObservable();
  }

  addVeiculo(veiculo: Veiculo): void {
    const atuais = this.veiculosSubject.value;
    this.veiculosSubject.next([...atuais, veiculo]);
  }
}
