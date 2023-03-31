import supertest from 'supertest';
import { app } from '../server';

import { MockDatabase } from '../mocks/mock.database';

const request: supertest.SuperTest<supertest.Test> = supertest(app);

beforeAll(() => {
  spyOn(console, 'info')
});

describe('Products', () => {
  it('Should get all products', async () => {
    const response = await request.get('/api/product');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(MockDatabase.products);
  });
});