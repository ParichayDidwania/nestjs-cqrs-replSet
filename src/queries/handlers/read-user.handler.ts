import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { ReadUsersQuery } from "../read-user.query";
import { UserRepository } from "src/repository/user.repository";

@QueryHandler(ReadUsersQuery)
export class ReadUserHandler implements IQueryHandler<ReadUsersQuery> {
  constructor(private repository: UserRepository) {}

  async execute(command: ReadUsersQuery) {
    return await this.repository.findAllUsers();
  }
}
