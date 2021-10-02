import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Fossil from '../lib/models/fossilModels.js';

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

  xit('returns all fossils in the database', async () => {
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

  xit('should return a fossil by id', async () => {
    return request(app)
      .get('/api/v1/fossils/1')
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          name: 'amber',
          collected: true,
        });
      });
  });

  xit('should update an order by id', async () => {
    return request(app)
      .patch('/api/v1/fossils/1')
      .send({
        id: '1',
        name: 'amber',
        collected: false,
      })
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          name: 'amber',
          collected: false,
        });
      });
  });

  it('should delete a fossil', async () => {
    const fossil = await Fossil.insert({
      name: 'Pinky',
      species: 'Bear',
      personality: 'Peppy',
    });
    return request(app)
      .delete(`/api/v1/fossils/${fossil.id}`)
      .then((res) => {
        expect(res.body).toEqual({});
      });
  });

  afterAll(() => {
    pool.end();
  });
});
