import { Migration } from '@mikro-orm/migrations';

export class Migration20230703182843 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "driver_entity" ("id" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "version" int not null default 1, "name" varchar(255) not null, constraint "driver_entity_pkey" primary key ("id"));',
    );
    this.addSql(
      'create index "driver_entity_id_index" on "driver_entity" ("id");',
    );

    this.addSql(
      'create table "car_entity" ("id" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "version" int not null default 1, "brand" varchar(255) not null, "driver_id" varchar(255) null, constraint "car_entity_pkey" primary key ("id"));',
    );
    this.addSql('create index "car_entity_id_index" on "car_entity" ("id");');
    this.addSql(
      'create index "car_entity_brand_index" on "car_entity" ("brand");',
    );
    this.addSql(
      'alter table "car_entity" add constraint "car_entity_brand_unique" unique ("brand");',
    );
    this.addSql(
      'alter table "car_entity" add constraint "car_entity_driver_id_unique" unique ("driver_id");',
    );

    this.addSql(
      'alter table "car_entity" add constraint "car_entity_driver_id_foreign" foreign key ("driver_id") references "driver_entity" ("id") on update cascade on delete set null;',
    );
  }

  async down(): Promise<void> {
    this.addSql(
      'alter table "car_entity" drop constraint "car_entity_driver_id_foreign";',
    );

    this.addSql('drop table if exists "driver_entity" cascade;');

    this.addSql('drop table if exists "car_entity" cascade;');
  }
}
