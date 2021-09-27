import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('Lab 09 express api servers', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('Gets a villager from an api', () => {
    return request(app)
      .get('api/random/')
      .then((res) => {});
  });

  afterAll(() => {
    pool.end();
  });
});
