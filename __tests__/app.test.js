import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('Lab 09 express api servers', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('Saves a villager from an api', () => {
    return request(app)
      .post('/api/v1/villagers')
      .send({ id: 341 })
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          name: 'Merengue',
          species: 'Rhino',
          personality: 'Normal',
        });
      });
  });

  afterAll(() => {
    pool.end();
  });
});
