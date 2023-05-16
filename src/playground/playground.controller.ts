import { Controller, Get } from '@nestjs/common';

@Controller('playground')
export class PlaygroundController {

  @Get()
  findAll(): string {
    let password = '712537273572§53725'; // crap password
    password = '712537273572§53725'; // crap password
    return 'This action returns stuff and a crap password ' + password;
  }

  @Get()
  sameFindAll(): string {
    const newPassword = '71637167367637627367'; // crap password
    return 'This action returns stuff and a crap password ' + newPassword;
  }
}
