import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/shared/user.service';

import {compare} from 'bcryptjs';

@Injectable()
export class AuthService {

  constructor(
    private userService: UserService,
  ) {}

  async validateUser(userEmail: string, userPassword: string): Promise<any> {
    const user = await this.userService.getByEmail(userEmail);
    const passwordMatch = await compare(userPassword, user.password)

    if(user && passwordMatch) {
      const { _id, name, email } = user;

      return { id: _id, name, email };
    }

    return null;
  }
}
