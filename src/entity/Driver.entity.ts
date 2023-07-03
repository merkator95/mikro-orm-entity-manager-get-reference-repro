import { Entity, OneToOne, Property } from '@mikro-orm/core';
import { CarEntity } from './Car.entity';
import { CustomBaseEntity } from './Base.entity';

@Entity()
export class DriverEntity extends CustomBaseEntity {
  @OneToOne(() => CarEntity, (car) => car.driver, {
    orphanRemoval: true,
  })
  car: CarEntity;

  @Property()
  name: string;
}
