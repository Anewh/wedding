import { Controller, Get, Inject, ParseEnumPipe, Query, Render } from '@nestjs/common';
import { UniqueFileStorageService } from 'src/common/service/file-storage.service';
import { SexType } from 'src/common/types/enum.types';

@Controller()
export class MainController {
    constructor(
        @Inject('FILE_STORAGE_accept-invite-people.txt')
        private readonly acceptInvitePeopleStorage: UniqueFileStorageService,
    ) { }

    @Get('hello')
    @Render('index.hbs')
    async getMainPage(
        @Query('s') sex: string,
        @Query('n') username: string
    ) {
        username = username.replaceAll('_', ' ');

        return {
            user: {
                sex,
                name: username,
                invited: this.acceptInvitePeopleStorage.has(`${sex} ${username}`),
            }
        };
    }
}
