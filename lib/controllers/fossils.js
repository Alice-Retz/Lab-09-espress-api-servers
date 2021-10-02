import { Router } from 'express';
import FossilService from '../services/fossilService';

export default Router().post('/', async (req, res, next) => {
  try {
    const savedFossil = await FossilService.saveFossil(req.body);
    console.log('!!!', req.body);
    res.json(savedFossil);
  } catch (error) {
    next(error);
  }
});
