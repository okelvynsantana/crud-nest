import { hash } from 'bcryptjs';
import { Model } from 'mongoose';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { User } from './user';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>){}

  async getByEmail(email: string): Promise<User> {
    return await this.userModel.findOne({ email }).exec()
  }

  async create({email, password, name}: User): Promise<User> {
    const checkUserExists = this.getByEmail(email)

    if(checkUserExists) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST)
    }

    const hashedPassword = await hash(password, 8);


    const user = new this.userModel({ name, email, password: hashedPassword });

    return user.save();
  }
}
