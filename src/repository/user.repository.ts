import { InjectConnection } from "@nestjs/mongoose";
import { Connection } from 'mongoose'
import { User, UserSchema } from "src/schema/user.schema";

export class UserRepository{

    constructor(
        @InjectConnection('WRITE') private writeCon: Connection,  
        @InjectConnection('READ') private readCon: Connection
    ) {}

    userReadModel = this.readCon.model(User.name, UserSchema);
    userWriteModel = this.writeCon.model(User.name, UserSchema);

    async findAllUsers() {
        return this.userReadModel.find({})
    }

    async createNewUser(email: string, name: string) {
        return this.userWriteModel.create({
            email: email,
            name: name
        })
    }
}