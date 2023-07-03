import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroormPostgresDatabaseModule } from './module/MikroormPostgresDbModule';
import { CarModule } from './module/car/car.module';

@Module({
  imports: [MikroormPostgresDatabaseModule, CarModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
