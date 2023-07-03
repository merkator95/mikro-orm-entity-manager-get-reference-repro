import { Migration } from '@mikro-orm/migrations';

export class Migration20230703184220 extends Migration {
  async up(): Promise<void> {
    this.addSql('drop index "car_entity_brand_index";');
  }

  async down(): Promise<void> {
    this.addSql(
      'create index "car_entity_brand_index" on "car_entity" ("brand");',
    );
  }
}
