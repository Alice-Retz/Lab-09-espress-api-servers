import { Router } from 'express';
import FossilService from '../services/fossilService';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const savedFossil = await FossilService.saveFossil(req.body);
      console.log('!!!', req.body);
      res.json(savedFossil);
    } catch (error) {
      next(error);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const savedFossils = await FossilService.getAllFossils();
      res.send(savedFossils);
    } catch (err) {
      next(err);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const fossilID = await FossilService.getById(id);
      res.send(fossilID);
    } catch (err) {
      next(err);
    }
  })

  .patch('/:id', async (req, res, next) => {
    try {
      const fossilPut = await FossilService.updateFossil(
        req.params.id,
        req.body
      );
      res.send(fossilPut);
    } catch (err) {
      next(err);
    }
  });
