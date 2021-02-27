import * as request from 'supertest';
import app from '@root/app';
import createConnection from '@root/connection';
import { truncateUsers } from '@root/utils';

let token:string;
let myId:string;
let notMyId:string;

describe('User module routes', () => {
  beforeAll(async () => {
    await createConnection();
    await truncateUsers();
  });

  describe('User creation routes', () => {
    it('should be able to create a user', async () => {
      const response = await request(app).post('/users')
        .send({
          username: 'bisk8s',
          password: 'secret',
        });
      myId = response.body.id;
      expect(response.status).toBe(200);
    });

    it('should be able to create ANOTHER user', async () => {
      const response = await request(app).post('/users')
        .send({
          username: 'ANOTHER',
          password: 'secret',
        });
      notMyId = response.body.id;
      expect(response.status).toBe(200);
    });

    it('should NOT be able to add an user with the same username', async () => {
      const response = await request(app).post('/users').send({
        username: 'bisk8s',
        password: '123',
      });
      expect(response.status).toBe(422);
    });
  });

  describe('User listing routes', () => {
    it('should list all users', async () => {
      const response = await request(app).get('/users').send();
      expect(response.status).toBe(200);
    });

    it('should list a single user', async () => {
      const response = await request(app).get('/users/1').send();
      expect(response.status).toBe(200);
    });
  });

  describe('User auth routes', () => {
    it('should be able to login', async () => {
      const response = await request(app).post('/auth')
        .send({
          username: 'bisk8s',
          password: 'secret',
        });
      token = response.body.token;
      expect(response.status).toBe(200);
    });

    it('should NOT be able to login with wrong password', async () => {
      const response = await request(app).post('/auth')
        .send({
          username: 'bisk8s',
          password: 'not secret',
        });
      expect(response.status).toBe(401);
    });

    it('should NOT be able to login without password', async () => {
      const response = await request(app).post('/auth')
        .send({
          username: 'bisk8s',
        });
      expect(response.status).toBe(422);
    });
  });

  describe('User deletion routes', () => {
    it('should NOT be able to delete a user whitout token', async () => {
      const response = await request(app)
        .delete(`/users/${notMyId}`)
        .send();
      expect(response.status).toBe(401);
    });

    it('should NOT be able to delete ANOTHER user', async () => {
      const response = await request(app)
        .delete(`/users/${notMyId}`)
        .send();
      expect(response.status).toBe(401);
    });

    it('should be able to delete self user', async () => {
      const response = await request(app)
        .delete(`/users/${myId}`)
        .set('Authorization', `Bearer ${token}`)
        .send();
      expect(response.status).toBe(401);
    });
  });
});
