import { createConnection as _createConnection } from 'typeorm';
import typeOrmOptions from '@config/db';

export default async function createConnection(){
    return await _createConnection(typeOrmOptions);
}