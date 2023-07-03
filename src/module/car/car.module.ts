import { Module } from '@nestjs/common';
import { CarController } from './car.controller';
import { CarRepositoryService } from './car.repository';
import { MikroormPostgresDatabaseModule } from '../MikroormPostgresDbModule';
import { DriverService } from '../driver/driver.service';
import { DriverModule } from '../driver/driver.module';
import { DriverRepositoryService } from '../driver/driver.repository';

@Module({
  imports: [MikroormPostgresDatabaseModule, DriverModule],
  controllers: [CarController],
  providers: [CarRepositoryService, DriverService, DriverRepositoryService],
})
export class CarModule {}
