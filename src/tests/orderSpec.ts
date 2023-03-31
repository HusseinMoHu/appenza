import supertest from 'supertest';
import { app } from '../server';
import { MockDatabase } from '../mocks/mock.database';

const request: supertest.SuperTest<supertest.Test> = supertest(app);

describe('Orders', () => {

  it('Should create an order', async () => {
    const response = await request
      .post('/api/order')
      .send({
        items: [
          { productId: MockDatabase.products[0].id, quantity: 4 },
          { productId: MockDatabase.products[1].id, quantity: 5 },
          { productId: MockDatabase.products[3].id, quantity: 2 },
        ]
      });


    expect(response.status).toBe(201);
    expect(response.body.id).toBe(1);
    expect(response.body.items.length).toBe(3);
    expect(response.body.timestamp).toBeDefined();
  });

  it('Should get all orders', async () => {
    const response = await request.get('/api/order');
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
  });

  it('Should not create an order with invalid product id', async () => {
    const response = await request
      .post('/api/order')
      .send({
        items: [
          { productId: 999, quantity: 4 },
        ]
      });
    expect(response.status).toBe(400);
  });

  it('Should not create an order with invalid quantity', async () => {
    const response = await request
      .post('/api/order')
      .send({
        items: [
          { productId: MockDatabase.products[0].id, quantity: 0 },
        ]
      });
    expect(response.status).toBe(400);
  });

  it('Should not create an order with invalid order items', async () => {
    const response = await request
      .post('/api/order')
      .send({
        items: [
          { productId: MockDatabase.products[0].id, quantity: 4 },
          { productId: MockDatabase.products[1].id, quantity: 5 },
          { productId: MockDatabase.products[3].id, quantity: 2 },
        ],
        invalid: 'invalid'
      });
    expect(response.status).toBe(400);
  });

  it('Should not create an order with invalid request body', async () => {
    const response = await request
      .post('/api/order')
      .send({
        invalid: 'invalid'
      });
    expect(response.status).toBe(400);
  });
});