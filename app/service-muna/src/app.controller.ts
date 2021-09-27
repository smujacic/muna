import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { MunaService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: MunaService) {}

  @GrpcMethod()
  guessWord(payload: any): any {
    console.log(payload);
    return this.appService.guessWord(payload);
  }
}
