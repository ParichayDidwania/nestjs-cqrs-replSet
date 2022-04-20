import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUser(): any {
    return this.appService.getUser();
  }

  @Post()
  createUser(): any {
    return this.appService.createUser();
  }
}
