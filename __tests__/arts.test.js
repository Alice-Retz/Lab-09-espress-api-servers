import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Art from '../lib/models/artModels.js';

describe('Lab 09 express api servers', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('Saves a art from an api to our database', async () => {
    return request(app)
      .post('/api/v1/arts')
      .send({ id: 'dynamic_painting' })
      .then((res) => {
        expect(res.body).toEqual({
          id: '3',
          name: 'dynamic painting',
          collected: false,
        });
      });
  });

  it('returns all arts in the database', async () => {
    return request(app)
      .get('/api/v1/arts')
      .then((res) => {
        expect(res.body).toEqual([
          {
            id: '1',
            name: 'academic painting',
            collected: true,
          },
          {
            id: '2',
            name: 'calm painting',
            collected: true,
          },
        ]);
      });
  });

  it('should return a art by id', async () => {
    return request(app)
      .get('/api/v1/arts/1')
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          name: 'academic painting',
          collected: true,
        });
      });
  });

  it('should update an order by id', async () => {
    return request(app)
      .patch('/api/v1/arts/1')
      .send({
        id: '1',
        name: 'academic painting',
        collected: false,
      })
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          name: 'academic painting',
          collected: false,
        });
      });
  });

  it('should delete a art', async () => {
    const art = await Art.insert({
      name: 'dynamic painting',
      collected: false,
    });
    return request(app)
      .delete(`/api/v1/arts/${art.id}`)
      .then((res) => {
        expect(res.body).toEqual({});
      });
  });

  afterAll(() => {
    pool.end();
  });
});
