import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('Lab 09 express api servers', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('Saves a fossil from an api to our database', () => {
    return request(app)
      .post('/api/v1/fossils')
      .send({ name: 'dunkleosteus' })
      .then((res) => {
        expect(res.body).toEqual({
          id: '3',
          name: 'dunkleosteus',
        });
      });
  });

  afterAll(() => {
    pool.end();
  });
});
