import { NestFactory } from '@nestjs/core';
import { NestFastifyApplication, FastifyAdapter } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { join } from 'node:path';
import { ValidationPipe } from '@nestjs/common';
import handlebars from 'handlebars';
import helpers from 'src/view/helpers';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.useStaticAssets({
    root: join(__dirname, '..', 'public'),
    prefix: '/public/',
  });

  for (const helper in helpers) {
    handlebars.registerHelper(helper, helpers[helper]);
  }

  app.setViewEngine({
    engine: {
      handlebars: handlebars,
    },
    templates: join(__dirname, '..', 'front'),
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
