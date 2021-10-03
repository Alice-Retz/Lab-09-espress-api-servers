import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Bug from '../lib/models/bugModels.js';

describe('Lab 09 express api servers', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('Saves a bug from an api to our database', async () => {
    return request(app)
      .post('/api/v1/bugs')
      .send({ id: 'honeybee' })
      .then((res) => {
        expect(res.body).toEqual({
          id: '3',
          name: 'honeybee',
          collected: false,
        });
      });
  });

  it('returns all bugs in the database', async () => {
    return request(app)
      .get('/api/v1/bugs')
      .then((res) => {
        expect(res.body).toEqual([
          {
            id: '1',
            name: 'paper kite butterfly',
            collected: true,
          },
          {
            id: '2',
            name: 'madagascan sunset moth',
            collected: true,
          },
        ]);
      });
  });

  it('should return a bug by id', async () => {
    return request(app)
      .get('/api/v1/bugs/1')
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          name: 'paper kite butterfly',
          collected: true,
        });
      });
  });

  it('should update an order by id', async () => {
    return request(app)
      .patch('/api/v1/bugs/1')
      .send({
        id: '1',
        name: 'paper kite butterfly',
        collected: false,
      })
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          name: 'paper kite butterfly',
          collected: false,
        });
      });
  });

  it('should delete a bug', async () => {
    const bug = await Bug.insert({
      name: 'honeybee',
      collected: false,
    });
    return request(app)
      .delete(`/api/v1/bugs/${bug.id}`)
      .then((res) => {
        expect(res.body).toEqual({});
      });
  });

  afterAll(() => {
    pool.end();
  });
});
