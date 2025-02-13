import { Body, ClassSerializerInterceptor, Controller, Get, Inject, Post } from '@nestjs/common';
import { UniqueFileStorageService } from 'src/common/service/file-storage.service';
import { AcceptInviteRequest, EatPreferencesRequest } from 'src/dto/request.dto';

@Controller('forms')
export class FormsController {
    constructor(
        @Inject('FILE_STORAGE_accept-invite-people.txt')
        private readonly acceptInvitePeopleStorage: UniqueFileStorageService,
        @Inject('FILE_STORAGE_eat-preferences.txt')
        private readonly eatPreferencesStorage: UniqueFileStorageService,
        @Inject('FILE_STORAGE_send-eat-preferences-people.txt')
        private readonly sendEatPreferencesPeople: UniqueFileStorageService,
        
    ) { }

    @Post('accept-invite')
    async acceptInvite(@Body() body: AcceptInviteRequest) {
        this.acceptInvitePeopleStorage.addData(body.toString());
    }

    @Post('eat-preferences')
    async addEatPreferences(@Body() body: EatPreferencesRequest) {
        const userKey = body.user.toString();

        if (!this.sendEatPreferencesPeople.has(userKey)) {
            this.eatPreferencesStorage.addData(body.toString());
            this.sendEatPreferencesPeople.addData(userKey);
        }
    }
}
