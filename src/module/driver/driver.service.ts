import { Injectable } from '@nestjs/common';
import { DriverRepositoryService } from './driver.repository';

@Injectable()
export class DriverService {
  constructor(private readonly repo: DriverRepositoryService) {}

  async createDriverForCar(body: { driverName: string; carId: string }) {
    await this.repo.persistDriverForCar(body);
  }
}
