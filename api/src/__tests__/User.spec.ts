import * as request from 'supertest';
import app from '@root/app';
import createConnection from '@root/connection';
import { truncateUsers } from '@root/utils';

describe('User entitiy', () => {
  beforeAll(async () => {
    await createConnection();
  });

  beforeEach(async () => {
    await truncateUsers();
  });

  it('should be able to create a user', async () => {
    const response = await request(app).post('/users').send({
      username: 'bisk8s',
      password: '123',
    });

    expect(response.status).toBe(200);
  });
});
