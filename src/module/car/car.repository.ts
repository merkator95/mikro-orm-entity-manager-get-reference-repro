import { EntityManager } from '@mikro-orm/postgresql';
import { CarEntity } from '../../entity/Car.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CarRepositoryService {
  constructor(private readonly em: EntityManager) {}

  async createCar(body: { brand: string; driverName: string }) {
    const record = new CarEntity();
    record.brand = body.brand;
    this.em.persist(record);
    await this.em.flush();
    const carId = record.id;
    return carId;
  }
}
