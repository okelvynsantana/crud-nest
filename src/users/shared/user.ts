
import { Exclude } from 'class-transformer'
import { Document } from 'mongoose'
export class User extends Document{
  name: string;
  email: string;
  
  @Exclude()
  password: string;
  
}
