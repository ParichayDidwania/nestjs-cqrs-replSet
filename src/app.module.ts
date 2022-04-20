import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }], 'READ')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
