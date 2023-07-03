import { Options } from '@mikro-orm/core';

import { PostgreSqlDriver } from '@mikro-orm/postgresql';

const MikroOrmConfig: Options = {
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
  // entities: ['dist/**/*.entity.js', BaseEntity],
  // // entitiesTs: [
  //   'src/**/*.entity.ts',
  //   'src/data/Base.entity.ts',
  //   'src/data/Post.entity.ts',
  //   'src/data/User.entity.ts',
  // ],
  type: 'postgresql',
};

export default MikroOrmConfig;
