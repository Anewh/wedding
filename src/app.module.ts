import { Module } from '@nestjs/common';
import { MainController } from './main/main.controller';
import { MainService } from './main/main.service';
import { FormsController } from './forms/forms.controller';
import { FormsService } from './forms/forms.service';

@Module({
  imports: [],
  controllers: [MainController, FormsController],
  providers: [MainService, FormsService],
})
export class AppModule {}
