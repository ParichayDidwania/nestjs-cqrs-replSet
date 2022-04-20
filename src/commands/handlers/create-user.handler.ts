import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateUserCommand } from "../create-user.command";
import { UserRepository } from "src/repository/user.repository";

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(private repository: UserRepository) {}

  async execute(command: CreateUserCommand) {
    const { email, name } = command;
    await this.repository.createNewUser(email,name);
  }
}
