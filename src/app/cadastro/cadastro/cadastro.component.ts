import { Component, OnInit }               from '@angular/core';
import { CommonModule }            from '@angular/common';
import { ReactiveFormsModule }     from '@angular/forms';    // ← import necessário
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VeiculoService } from '../../services/veiculo.service';
import { Veiculo } from '../../models/veiculo.model';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    CommonModule,           // ← diretivas *ngIf, *ngFor etc.
    ReactiveFormsModule     // ← traz a diretiva [formGroup]
  ],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {
  cadastroForm!: FormGroup;
  currentYear = new Date().getFullYear();

  constructor(
    private fb: FormBuilder,
    private veiculoService: VeiculoService
  ) {}

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      marca:  ['', Validators.required],
      modelo: ['', Validators.required],
      ano:    [
                '',
                [
                  Validators.required,
                  Validators.min(1900),
                  Validators.max(this.currentYear)
                ]
              ],
        placa: [
                '',
                [
                  Validators.required,
                  Validators.pattern('^[A-Za-z]{3}-[0-9]{4}$')
                ]
              ]
    });
  }

  onSubmit(): void {
    if (this.cadastroForm.valid) {
      const novo: Veiculo = this.cadastroForm.value;
      this.veiculoService.addVeiculo(novo);
      this.cadastroForm.reset();
    }
  }
}
