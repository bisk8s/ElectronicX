import { createConnection } from 'typeorm';
import typeOrmOptions from '@config/db';

const connection = async () => createConnection(typeOrmOptions);
export default connection;
