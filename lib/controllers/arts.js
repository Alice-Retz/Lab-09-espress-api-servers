import { Router } from 'express';
import ArtService from '../services/artService';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const savedArt = await ArtService.saveArt(req.body);
      res.json(savedArt);
    } catch (error) {
      next(error);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const savedArts = await ArtService.getAllArts();
      res.send(savedArts);
    } catch (err) {
      next(err);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const artID = await ArtService.getById(id);
      res.send(artID);
    } catch (err) {
      next(err);
    }
  })

  .patch('/:id', async (req, res, next) => {
    try {
      const artPut = await ArtService.updateArt(req.params.id, req.body);
      res.send(artPut);
    } catch (err) {
      next(err);
    }
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const artDeleted = await ArtService.deleteArt(id);
      res.send(artDeleted);
    } catch (err) {
      next(err);
    }
  });
