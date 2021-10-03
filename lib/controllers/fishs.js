import { Router } from 'express';
import FishService from '../services/fishService';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const savedFish = await FishService.saveFish(req.body);
      res.json(savedFish);
    } catch (error) {
      next(error);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const savedFishs = await FishService.getAllFishs();
      res.send(savedFishs);
    } catch (err) {
      next(err);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const fishID = await FishService.getById(id);
      res.send(fishID);
    } catch (err) {
      next(err);
    }
  })

  .patch('/:id', async (req, res, next) => {
    try {
      const fishPut = await FishService.updateFish(req.params.id, req.body);
      res.send(fishPut);
    } catch (err) {
      next(err);
    }
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const fishDeleted = await FishService.deleteFish(id);
      res.send(fishDeleted);
    } catch (err) {
      next(err);
    }
  });
