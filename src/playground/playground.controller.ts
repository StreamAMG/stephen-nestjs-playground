import { Controller, Get } from '@nestjs/common';

@Controller('playground')
export class PlaygroundController {

  @Get()
  findAll(): string {
    const password = '712537273572§53725'; // crap password
    return 'This action returns stuff and a crap password ' + password;
  }
}
