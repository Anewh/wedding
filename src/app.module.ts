import { Module } from '@nestjs/common';
import { MainController } from './main/main.controller';
import { FormsController } from './forms/forms.controller';
import { createUniqueFileStorageProvider } from 'src/common/service/file-storage.service';

@Module({
  imports: [],
  controllers: [
    MainController,
    FormsController
  ],
  providers: [
    createUniqueFileStorageProvider('accept-invite-people.txt'),
    createUniqueFileStorageProvider('eat-preferences.txt'),
    createUniqueFileStorageProvider('send-eat-preferences-people.txt'),
  ],
})
export class AppModule { }
