import { Controller, Get, ParseEnumPipe, Query, Render } from '@nestjs/common';
import { SexType } from 'src/common/types/enum.types';

@Controller()
export class MainController {
    @Get('hello')
    @Render('index.hbs')
    getMainPage(
        @Query('s') sex: string,
        @Query('n') username: string
    ) {
        return {
            user: {
                sex,
                name: username
            }
        };
    }
}
