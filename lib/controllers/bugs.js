import { Router } from 'express';
import BugService from '../services/bugService';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const savedBug = await BugService.saveBug(req.body);
      res.json(savedBug);
    } catch (error) {
      next(error);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const savedBugs = await BugService.getAllBugs();
      res.send(savedBugs);
    } catch (err) {
      next(err);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const bugID = await BugService.getById(id);
      res.send(bugID);
    } catch (err) {
      next(err);
    }
  })

  .patch('/:id', async (req, res, next) => {
    try {
      const bugPut = await BugService.updateBug(req.params.id, req.body);
      res.send(bugPut);
    } catch (err) {
      next(err);
    }
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const bugDeleted = await BugService.deleteBug(id);
      res.send(bugDeleted);
    } catch (err) {
      next(err);
    }
  });
