import { Body, Controller, Post } from '@nestjs/common';
import { CarRepositoryService } from './car.repository';
import { DriverService } from '../driver/driver.service';

@Controller('car')
export class CarController {
  constructor(
    private readonly carRepository: CarRepositoryService,
    private readonly driverService: DriverService,
  ) {}

  @Post()
  async createCarWithDriver(
    @Body() body: { brand: string; driverName: string },
  ) {
    const carId = await this.carRepository.createCar(body);
    await this.driverService.createDriverForCar({
      driverName: body.driverName,
      carId: carId,
    });
  }
}
