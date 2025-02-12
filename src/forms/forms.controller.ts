import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { UniqueFileStorageService } from 'src/common/service/file-storage.service';
import { AcceptInviteRequest } from 'src/dto/request.dto';

@Controller('forms')
export class FormsController {
    constructor(
        @Inject('FILE_STORAGE_accept-invite-people.txt')
        private readonly acceptInvitePeopleStorage: UniqueFileStorageService,
    ) { }

    @Post('accept-invite')
    async acceptInvite(@Body() body: AcceptInviteRequest) {
        const sex = body.sex;
        const username = body.username;

        this.acceptInvitePeopleStorage.addData(`${sex} ${username}`);
    }
}
