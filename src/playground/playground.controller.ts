import { Controller, Get } from '@nestjs/common';

@Controller('playground')
export class PlaygroundController {

  @Get()
  findAll(): string {
    const password = '1656153651635653652';
    return 'This action returns stuff' + password ;
  }
}
