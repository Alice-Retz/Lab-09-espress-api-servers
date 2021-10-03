import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Fish from '../lib/models/fishModels.js';

describe('Lab 09 express api servers', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('Saves a fish from an api to our database', async () => {
    return request(app)
      .post('/api/v1/fishs')
      .send({ id: 'killifish' })
      .then((res) => {
        expect(res.body).toEqual({
          id: '3',
          name: 'killifish',
          collected: false,
        });
      });
  });

  it('returns all fishs in the database', async () => {
    return request(app)
      .get('/api/v1/fishs')
      .then((res) => {
        expect(res.body).toEqual([
          {
            id: '1',
            name: 'bitterling',
            collected: true,
          },
          {
            id: '2',
            name: 'koi',
            collected: true,
          },
        ]);
      });
  });

  it('should return a fish by id', async () => {
    return request(app)
      .get('/api/v1/fishs/1')
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          name: 'bitterling',
          collected: true,
        });
      });
  });

  it('should update an order by id', async () => {
    return request(app)
      .patch('/api/v1/fishs/1')
      .send({
        id: '1',
        name: 'bitterling',
        collected: false,
      })
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          name: 'bitterling',
          collected: false,
        });
      });
  });

  it('should delete a fish', async () => {
    const fish = await Fish.insert({
      name: 'killifish',
      collected: false,
    });
    return request(app)
      .delete(`/api/v1/fishs/${fish.id}`)
      .then((res) => {
        expect(res.body).toEqual({});
      });
  });

  afterAll(() => {
    pool.end();
  });
});
