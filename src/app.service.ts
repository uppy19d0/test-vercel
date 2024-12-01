import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '¡Hola, este es un mensaje desde el servicio!';
  }
}
