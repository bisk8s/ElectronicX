import 'reflect-metadata';
import app from '@root/app';
import connection from '@root/connection';

connection().then(async () => {
  const { PORT } = process.env;
  // start server
  app.listen(PORT);
  console.info(`Server has started on port ${PORT} 🎉`);
}).catch((error) => console.error(error));
