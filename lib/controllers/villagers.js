import { Router } from 'express';
import VillagerService from '../services/villagerService';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const savedVillager = await VillagerService.saveVillager(req.body);
      res.json(savedVillager);
    } catch (error) {
      next(error);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const savedVillagers = await VillagerService.getAllVillagers();
      res.send(savedVillagers);
    } catch (err) {
      next(err);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const villagerID = await VillagerService.getById(id);
      res.send(villagerID);
    } catch (err) {
      next(err);
    }
  })

  .patch('/:id', async (req, res, next) => {
    try {
      const villagerPut = await VillagerService.updateVillager(
        req.params.id,
        req.body
      );
      res.send(villagerPut);
    } catch (err) {
      next(err);
    }
  });
