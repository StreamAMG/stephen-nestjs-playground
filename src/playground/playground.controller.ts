import { Controller, Get } from '@nestjs/common';

@Controller('playground')
export class PlaygroundController {

  @Get()
  findAll(): string {
    return 'This action returns stuff';
  }
}
