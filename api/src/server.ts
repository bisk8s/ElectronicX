import 'reflect-metadata';
import app from '@root/app';
import createConnection from '@root/connection';

createConnection().then(async () => {
  const { PORT } = process.env;
  // start server
  app.listen(PORT);
  console.info(`Server has started on port ${PORT} 🎉`);
}).catch((error) => console.error(error));
