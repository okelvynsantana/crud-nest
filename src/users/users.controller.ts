import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { User } from './shared/user';
import { UserService } from './shared/user.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {
    
  }

  @Post()
  async create(@Body() user: User): Promise<User> {
    const createdUser = await this.userService.create(user); 

    return createdUser;

  }
}
