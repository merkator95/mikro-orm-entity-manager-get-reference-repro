import { EntityManager } from '@mikro-orm/postgresql';
import { CarEntity } from '../../entity/Car.entity';
import { Injectable } from '@nestjs/common';
import { DriverEntity } from '../../entity/Driver.entity';

@Injectable()
export class DriverRepositoryService {
  constructor(private readonly em: EntityManager) {}

  async persistDriverForCar(body: { driverName: string; carId: string }) {
    const record = new DriverEntity();
    record.name = body.driverName;
    const car = this.em.getReference(CarEntity, body.carId);
    record.car = car;
    this.em.persist(car);
    await this.em.flush();
  }
}
