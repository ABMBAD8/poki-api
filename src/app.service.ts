import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from './config.service';

import https = require("https");

@Injectable()
export class AppService {

  /**
   *
   */
  constructor(private _http: HttpService, private _config: ConfigService) {

  }

  getPokemons() {
    return this._http.get(`${this._config.get('POKEMON_API')}item/?limit=100&offset=0`);
  }

  getPokemon(url: string) {
    return this._http.get(url, { httpAgent: new https.Agent({ rejectUnauthorized: false }) });
  }
}
