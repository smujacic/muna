import { Controller, Get, Inject, OnModuleInit, Param } from '@nestjs/common';
import { ClientGrpcProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

interface MunaService {
  guessWord(payload?: any): Observable<any>;
}

@Controller('api')
export class AppController implements OnModuleInit {
  private munaService: MunaService;

  constructor(@Inject('SERVICE_MUNA') private munaClient: ClientGrpcProxy) {}

  onModuleInit() {
    this.munaService = this.munaClient.getService<MunaService>('AppController');
  }

  @Get(':word')
  async guessWord(@Param('word') word: string): Promise<any> {
    return await this.munaService.guessWord({ word }).toPromise();
  }
}
