import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { User, UserSchema } from './schema/user.schema';

@Injectable()
export class AppService {
  constructor(@InjectConnection('WRITE') private writeCon: Connection,  
  @InjectConnection('READ') private readCon: Connection) {}

  getUser(): any {
    return this.readCon.model(User.name, UserSchema).find({})
  }

  createUser(): any {
    return this.writeCon.model(User.name, UserSchema).create({
      email: "abcd@gmail.com",
      name: "abcd"
    })
  }
}
