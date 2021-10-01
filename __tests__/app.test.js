import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Villager from '../lib/models/getVillagers.js';

describe('Lab 09 express api servers', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('Saves a villager from an api to our database', () => {
    return request(app)
      .post('/api/v1/villagers')
      .send({ id: 341 })
      .then((res) => {
        expect(res.body).toEqual({
          id: '3',
          name: 'Merengue',
          species: 'Rhino',
          personality: 'Normal',
        });
      });
  });

  it('returns all villagers in the database', async () => {
    return request(app)
      .get('/api/v1/villagers')
      .then((res) => {
        expect(res.body).toEqual([
          {
            id: '1',
            name: 'Peggy',
            personality: 'Peppy',
            species: 'Pig',
          },
          {
            id: '2',
            name: 'Antonio',
            personality: 'Jock',
            species: 'Anteater',
          },
        ]);
      });
  });

  it('should return a villager by id', async () => {
    const villager = await Villager.insert({
      name: 'Tex',
      species: 'Penguin',
      personality: 'Smug',
    });
    return request(app)
      .get(`/api/v1/villagers/${villager.id}`)
      .then((res) => {
        expect(res.body).toEqual(villager);
      });
  });

  afterAll(() => {
    pool.end();
  });
});
