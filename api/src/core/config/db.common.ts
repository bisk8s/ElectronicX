const commonConfig = {
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

export default commonConfig;
