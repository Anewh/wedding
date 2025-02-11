import { Body, Controller, Post } from '@nestjs/common';
import { AcceptInviteRequest } from 'src/dto/request.dto';

@Controller('forms')
export class FormsController {
    @Post('accept-invite')
    acceptInvite(@Body() body: AcceptInviteRequest) {
        const sex = body.sex;
        const username = body.username;

        
    }
}
