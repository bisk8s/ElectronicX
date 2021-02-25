import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as express from 'express';

import rootRoutes from '@routes/Root';
import typeOrmOptions from '@config/db';

createConnection(typeOrmOptions).then(async () => {
  const app = express();

  // add rules
  app.use(express.json());
  app.use(rootRoutes);

  // start server
  app.listen(3000);
  console.info('Server has started on port 3000 🎉.');
}).catch((error) => console.error(error));
