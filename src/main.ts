import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { urlencoded, json} from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true,});

  app.use(json({limit: '50mb'}));
  app.use(urlencoded({extended: true, limit: '50mb'}));

  const options = new DocumentBuilder()
    .setTitle('Pokemon API Documentation')
    .setDescription('Swagger docs for endpoints within our pokedex api.')
    .build();

  const docs = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, docs);

  await app.listen(3000);
}
bootstrap();
