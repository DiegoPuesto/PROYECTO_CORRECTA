import { Controller, Get, Param } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  
  // Esta es la lista que ya tenías (ahora la guardamos en una variable)
  private readonly cats = [
    { id: 1, nombre: 'Michi', raza: 'Común Europeo', edad: 2 },
    { id: 2, nombre: 'Luna', raza: 'Siamés', edad: 1 },
    { id: 3, nombre: 'Simba', raza: 'Persa', edad: 5 }
  ];

  @Get()
  findAll() {
    return this.cats;
  }

  // --- NUEVA RUTA AQUÍ ---
  @Get(':id')
  findOne(@Param('id') id: string) {
    // Buscamos en la lista el gato que coincida con el ID que pongas en la URL
    return this.cats.find(cat => cat.id === Number(id));
  }
}