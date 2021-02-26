import sqliteConfig from './db.sqlite';
import postgresConfig from './db.postgress';
import commonConfig from './db.common';

const {
  DATABASE_TYPE,
} = process.env;

const selectedConf = DATABASE_TYPE === 'sqlite' ? sqliteConfig : postgresConfig;

const typeOrmOptions = {
  ...commonConfig,
  ...selectedConf,
};

export default typeOrmOptions;
