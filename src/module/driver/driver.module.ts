import { Module } from '@nestjs/common';
import { DriverRepositoryService } from './driver.repository';
import { MikroormPostgresDatabaseModule } from '../MikroormPostgresDbModule';
import { DriverService } from './driver.service';

@Module({
  imports: [MikroormPostgresDatabaseModule],
  controllers: [],
  providers: [DriverRepositoryService, DriverService],
})
export class DriverModule {}
