import { Controller, Get, Inject, Param, ParseEnumPipe, Query, Render } from '@nestjs/common';
import { UniqueFileStorageService } from 'src/common/service/file-storage.service';
import { SexType } from 'src/common/types/enum.types';
import { UserData } from 'src/dto/request.dto';

@Controller()
export class MainController {
    constructor(
        @Inject('FILE_STORAGE_accept-invite-people.txt')
        private readonly acceptInvitePeopleStorage: UniqueFileStorageService,
        @Inject('FILE_STORAGE_send-eat-preferences-people.txt')
        private readonly sendEatPreferencesPeople: UniqueFileStorageService,
    ) { }

    @Get('hello/:s/:n')
    @Render('index.hbs')
    async getMainPage(
        @Param('s') sex: SexType,
        @Param('n') username: string
    ) {
        username = username.replaceAll('_', ' ');

        const user = new UserData();
        user.sex = sex;
        user.username = username;

        const userKey = user.toString();

        return {
            user: {
                sex,
                name: username,
                invited: this.acceptInvitePeopleStorage.has(userKey),
                sentEatPreferences: this.sendEatPreferencesPeople.has(userKey)
            }
        };
    }
}
