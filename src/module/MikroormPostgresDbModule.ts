import { MikroOrmModule } from '@mikro-orm/nestjs';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MikroOrmModule.forRootAsync({
      useFactory: () => ({
        driver: PostgreSqlDriver,
        dbName: 'repro',
        host: 'localhost',
        port: 5432,
        user: 'admin',
        password: 'admin',
        debug: true,
        entities: ['dist/entity/*.entity.js'],
        entitiesTs: ['src/entity/*.entity.ts'],
        pool: {
          min: 0,
          max: 10,
          idleTimeoutMillis: 60_000,
        },
      }),
    }),
  ],
  exports: [MikroormPostgresDatabaseModule],
})
export class MikroormPostgresDatabaseModule {}
