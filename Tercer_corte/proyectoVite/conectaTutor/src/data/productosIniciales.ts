// aca va la conexion a mongo
// pero primero se crean unos producto iniciales

import type { Producto } from '../types/producto';

export const productosIniciales: Producto[] = [
  {
    id: 1,
    nombre: 'Tarjeta Gráfica RTX 3080',
    descripcion: 'Tarjeta gráfica de alto rendimiento para gaming',
    precio: 1200,
    categoria: 'tarjetas graficas',
    unidades: 10
  },
  {
    id: 2,
    nombre: 'Procesador i7-12700K',
    descripcion: 'Procesador de alto rendimiento para gaming y productividad',
    precio: 450,
    categoria: 'procesadores',
    unidades: 15
  },
  {
    id: 3,
    nombre: 'Placa Base Z690',
    descripcion: 'Placa base de alta gama para procesadores Intel',
    precio: 250,
    categoria: 'placas base',
    unidades: 20
  },
  {
    id: 4,
    nombre: 'Memoria RAM DDR4-32GB',
    descripcion: 'Memoria RAM de alta velocidad y capacidad',
    precio: 150,
    categoria: 'memorias ram',
    unidades: 25
  }
];