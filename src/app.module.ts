import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateUserHandler } from './commands/handlers/create-user.handler';
import { ReadUserHandler } from './queries/handlers/read-user.handler';
import { UserRepository } from './repository/user.repository';
import { User, UserSchema } from './schema/user.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27026/test', {
      connectionName: "WRITE"
    }),
    MongooseModule.forRoot('mongodb://localhost:27027/test', {
      connectionName: "READ"
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }], 'WRITE'),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }], 'READ'),
    CqrsModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    UserRepository,
    CreateUserHandler,
    ReadUserHandler
  ],
})
export class AppModule {}
