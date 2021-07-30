import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Pokemon API Documentation')
    .setDescription('Swagger docs for endpoints within our pokedex api.')
    .build();

  const docs = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, docs);

  await app.listen(3000);
}
bootstrap();
