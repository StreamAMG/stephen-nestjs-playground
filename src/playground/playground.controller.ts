import { Controller, Get } from '@nestjs/common';

@Controller('playground')
export class PlaygroundController {

  @Get()
  findAll(): string {
    const password = '1656153651635653652'; // Should flag analysis warning !
    return 'This action returns stuff' + password ;
  }
}
