
import { ApiProperty } from '@nestjs/swagger';
export class PokemonURL {
    @ApiProperty({ description: 'The URL of the Pokemon' })
    url: string;
}