import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MunaService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [MunaService],
})
export class AppModule {}
