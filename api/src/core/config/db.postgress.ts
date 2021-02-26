import * as PostgressConnectionStringParser from 'pg-connection-string';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const {
  DATABASE_SSL, DATABASE_URL,
} = process.env;

const ssl = DATABASE_SSL === 'true';

const extraSSL = ssl ? {
  ssl,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
} : {};

const connectionOptions = PostgressConnectionStringParser.parse(DATABASE_URL || '');

const postgresConfig:PostgresConnectionOptions = {
  ...extraSSL,
  type: 'postgres',
  host: connectionOptions.host,
  port: parseInt(connectionOptions.port, 10),
  username: connectionOptions.user,
  password: connectionOptions.password,
  database: connectionOptions.database,
};

export default postgresConfig;
