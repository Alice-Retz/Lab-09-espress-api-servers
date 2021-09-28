import { Router } from 'express';
import VillagerService from '../services/villagerService';

export default Router().post('/', async (req, res, next) => {
  try {
    const savedVillager = await VillagerService.saveVillager(req.body);
    res.json(savedVillager);
  } catch (error) {
    next(error);
  }
});
