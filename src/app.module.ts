import { Module } from '@nestjs/common';
import { MainController } from './main/main.controller';
import { MainService } from './main/main.service';
import { FormsController } from './forms/forms.controller';
import { FormsService } from './forms/forms.service';
import { createUniqueFileStorageProvider } from 'src/common/service/file-storage.service';

@Module({
  imports: [],
  controllers: [
    MainController,
    FormsController
  ],
  providers: [
    MainService,
    FormsService,
    createUniqueFileStorageProvider('accept-invite-people.txt'),
  ],
})
export class AppModule { }
