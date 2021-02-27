import * as request from 'supertest';
import app from '@root/app';
import createConnection from '@root/connection';

import { truncateItemCategories, truncateItems, truncateUsers } from '@root/utils';

// PRIVATE
let token:string;
let itemId:string;
let categoryId:string;

describe('Items Module routes', () => {
  beforeAll(async () => {
    await createConnection();
    await truncateUsers();
    await truncateItems();
    await truncateItemCategories();
  });

  describe('creating test user', () => {
    it('should be able to create a user', async () => {
      const response = await request(app).post('/users')
        .send({
          username: 'bisk8s',
          password: 'secret',
        });
      expect(response.status).toBe(200);
    });

    it('should be able to login', async () => {
      const response = await request(app).post('/auth')
        .send({
          username: 'bisk8s',
          password: 'secret',
        });
      token = response.body.token;
      expect(response.status).toBe(200);
    });
  });

  describe('creation routes', () => {
    it('should be able to create an item category', async () => {
      const response = await request(app)
        .post('/itemCategories')
        .set('Authorization', `Bearer ${token}`)
        .send({
          name: 'test category',
        });
      categoryId = response.body.id;
      expect(response.status).toBe(200);
    });

    it('should be able to create an item', async () => {
      const response = await request(app)
        .post('/items')
        .set('Authorization', `Bearer ${token}`)
        .send({
          name: 'test item',
          price: 20,
          quantity: 100,
          categories: [
            {
              id: categoryId,
            },
          ],
        });
      itemId = response.body.id;
      expect(response.status).toBe(200);
    });
  });

  describe('listing routes', () => {
    it('should list all items', async () => {
      const response = await request(app).get('/items').send();
      expect(response.status).toBe(200);
    });

    it('should list a single item', async () => {
      const response = await request(app).get(`/items/${itemId}`).send();
      expect(response.status).toBe(200);
    });

    it('should list all item categories', async () => {
      const response = await request(app)
        .get('/itemCategories').send();
      expect(response.status).toBe(200);
    });

    it('should list a single item category', async () => {
      const response = await request(app)
        .get(`/itemCategories/${categoryId}`).send();
      expect(response.status).toBe(200);
    });
  });

  describe('deletion routes', () => {
    it('should be able to delete an item', async () => {
      const response = await request(app)
        .delete(`/items/${itemId}`)
        .set('Authorization', `Bearer ${token}`)
        .send();
      expect(response.status).toBe(200);
    });

    it('should be able to delete an item category', async () => {
      const response = await request(app)
        .delete(`/itemCategories/${categoryId}`)
        .set('Authorization', `Bearer ${token}`)
        .send();
      expect(response.status).toBe(200);
    });
  });
});
