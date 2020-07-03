import { Controller, UseGuards, Request, Post } from '@nestjs/common';
import { LocalAuthGuard } from './shared/local-auth.guard';

@Controller()
export class AuthController {

  @UseGuards(LocalAuthGuard)
  @Post('sessions')
  async login(@Request() req: any ) {
    return req.user;
  }
}
