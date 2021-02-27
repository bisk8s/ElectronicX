import * as request from 'supertest';
import app from '@root/app';
import createConnection from '@root/connection';
import { truncateUsers } from '@root/utils';

describe('User public routes', () => {
  beforeAll(async () => {
    await createConnection();
    await truncateUsers();
  });

  it('should be able to create a user', async () => {
    const response = await request(app).post('/users').send({
      username: 'bisk8s',
      password: '123',
    });
    expect(response.status).toBe(200);
  });

  it('should list all users', async () => {
    const response = await request(app).get('/users').send();
    expect(response.status).toBe(200);
  });

  it('should list a single user', async () => {
    const response = await request(app).get('/users/1').send();
    expect(response.status).toBe(200);
  });

  it('should not be able to add an user with the same username', async () => {
    const response = await request(app).post('/users').send({
      username: 'bisk8s',
      password: '123',
    });
    expect(response.status).toBe(422);
  });
});
