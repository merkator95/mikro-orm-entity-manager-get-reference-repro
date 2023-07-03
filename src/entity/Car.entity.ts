import { Entity, Property, OneToOne } from '@mikro-orm/core';
import { DriverEntity } from './Driver.entity';
import { CustomBaseEntity } from './Base.entity';

@Entity()
export class CarEntity extends CustomBaseEntity {
  @Property()
  brand: string;

  @OneToOne({ nullable: true, type: 'DriverEntity' })
  driver?: DriverEntity;
}
