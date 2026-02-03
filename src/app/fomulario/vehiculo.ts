import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VehiculoService } from '../services/vehiculo.service';

@Component({
  selector: 'app-vehiculo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './vehiculo.html',
  styleUrl: './vehiculo.scss'
})
export class vehiculo implements OnInit {

  vehiculo:any = {};
  vehiculos:any[] = [];

  constructor(private service: VehiculoService) {}

  ngOnInit(){
    this.cargar();
  }

  guardar(){
    this.service.crear(this.vehiculo).subscribe({
      next: () => {
        this.vehiculo = {};
        this.cargar();
      },
      error: err => {
        alert(err.error.detail);
      }
    });
  }

  cargar(){
    this.service.listar().subscribe((data:any)=>{
      this.vehiculos = data;
    });
  }
}
