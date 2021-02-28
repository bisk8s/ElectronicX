import { createConnection as _createConnection } from 'typeorm';
import typeOrmOptions from '@config/db';

export default async function createConnection() {
  const conn = await _createConnection(typeOrmOptions);
  return conn;
}
