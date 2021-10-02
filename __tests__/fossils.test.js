import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('Lab 09 express api servers', () => {
  beforeEach(() => {
    return setup(pool);
  });

  xit('Saves a fossil from an api to our database', async () => {
    return request(app)
      .post('/api/v1/fossils')
      .send({ id: 'dunkleosteus' })
      .then((res) => {
        expect(res.body).toEqual({
          id: '3',
          name: 'dunkleosteus',
          collected: false,
        });
      });
  });

  it('returns all fossils in the database', async () => {
    return request(app)
      .get('/api/v1/fossils')
      .then((res) => {
        expect(res.body).toEqual([
          {
            id: '1',
            name: 'amber',
            collected: true,
          },
          {
            id: '2',
            name: 'ammonite',
            collected: true,
          },
        ]);
      });
  });

  afterAll(() => {
    pool.end();
  });
});
