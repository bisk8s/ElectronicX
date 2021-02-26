import * as PostgressConnectionStringParser from 'pg-connection-string';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const baseConfig: PostgresConnectionOptions = {
  type: 'postgres',
  synchronize: true,
  logging: false,
  entities: [
    'src/modules/Users/entities/**/*.ts',
    'src/modules/Items/entities/**/*.ts',
  ],
  migrations: [
    'src/modules/Users/migrations/**/*.ts',
    'src/modules/Items/migrations/**/*.ts',
  ],
  subscribers: [
    'src/modules/Users/subscribers/**/*.ts',
    'src/modules/Items/subscribers/**/*.ts',
  ],
  cli: {
    entitiesDir: 'src/common/entities',
    migrationsDir: 'src/common/migrations',
    subscribersDir: 'src/common/subscribers',
  },
};

const { DATABASE_SSL } = process.env;
const ssl = DATABASE_SSL === 'true';

const extra = ssl ? {
  ssl,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
} : {};

const databaseUrl: string = process.env.DATABASE_URL;
const connectionOptions = PostgressConnectionStringParser.parse(databaseUrl);

const typeOrmOptions: PostgresConnectionOptions = {
  ...baseConfig,
  ...extra,
  // name: connectionOptions.application_name,
  host: connectionOptions.host,
  port: parseInt(connectionOptions.port, 10),
  username: connectionOptions.user,
  password: connectionOptions.password,
  database: connectionOptions.database,
};

export default typeOrmOptions;
