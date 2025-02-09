import { Module } from '@nestjs/common';
import { MainController } from './main/main.controller';
import { MainService } from './main/main.service';

@Module({
  imports: [],
  controllers: [MainController],
  providers: [MainService],
})
export class AppModule {}
