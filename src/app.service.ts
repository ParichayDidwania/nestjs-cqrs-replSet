import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserCommand } from './commands/create-user.command';
import { ReadUsersQuery } from './queries/read-user.query';

@Injectable()
export class AppService {
  constructor(private commandBus: CommandBus, private queryBus: QueryBus) {}

  getUser(): any {
    return this.queryBus.execute(
      new ReadUsersQuery()
    )
  }

  createUser(): any {
    return this.commandBus.execute(
      new CreateUserCommand("new@gmail.com", "new")
    )
  }
}
