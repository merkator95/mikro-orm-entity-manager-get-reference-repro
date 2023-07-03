import { Migration } from '@mikro-orm/migrations';

export class Migration20230703184046 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'alter table "car_entity" drop constraint "car_entity_brand_unique";',
    );
  }

  async down(): Promise<void> {
    this.addSql(
      'alter table "car_entity" add constraint "car_entity_brand_unique" unique ("brand");',
    );
  }
}
