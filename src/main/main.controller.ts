import { Controller, Get, Render } from '@nestjs/common';

@Controller('hello')
export class MainController {
    @Get()
    @Render('index.hbs')
    getMainPage() {
        return {};
    }
}
