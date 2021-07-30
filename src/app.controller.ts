import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('pokemons')
  getPokemons() {
    return this.appService.getPokemons();
  }

  @Get('pokemon:url')
  getPokemon(@Param() params) {
    return this.appService.getPokemon(params.url);
  }
}
