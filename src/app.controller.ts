import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { ApiConsumes, ApiBody, ApiResponse } from '@nestjs/swagger';
import { PokemonURL } from './_model/Pokemon';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('pokemons')
  @ApiResponse({ status: 200, description: 'Pokemon list has been returned successfully.' })
  getPokemons(@Res() res: Response) {
    return this.appService.getPokemons().subscribe(resp => {
      res.send(resp.data);
    });
  }

  @Post('pokemon')
  @ApiConsumes('application/json')
  @ApiBody({
    description: 'Get pokemon details',
    type: PokemonURL
  })
  @ApiResponse({ status: 201, description: 'Pokemon details returned successfully.' })
  getPokemon(@Body() body: PokemonURL, @Res() res: Response) {
    return this.appService.getPokemon(body).subscribe(resp => {
      res.send(resp.data);
    });
  }
}
