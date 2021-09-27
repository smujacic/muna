import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { resolve } from 'path';
import { AppController } from './app.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SERVICE_MUNA',
        transport: Transport.GRPC,
        options: {
          package: 'muna',
          protoPath: resolve(
            __dirname,
            '../../service-muna/.protobuf/muna.proto',
          ),
          url: 'localhost:50052',
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
