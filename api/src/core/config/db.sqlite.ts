import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

const {
  DATABASE_PATH,
} = process.env;

const sqliteConfig:SqliteConnectionOptions = {
  type: 'sqlite',
  database: DATABASE_PATH,
};

export default sqliteConfig;
