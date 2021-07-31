import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { ApiConsumes } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('pokemons')
  getPokemons(@Res() res: Response) {
    return this.appService.getPokemons().subscribe(resp => {
      res.send(resp.data);
    });
  }

  @Post('pokemon')
  @ApiConsumes('application/json')
  getPokemon(@Body() body: any, @Res() res: Response) {
    return this.appService.getPokemon(body.url).subscribe(resp => {
      res.send(resp.data);
    });
  }
}
