import Art from '../models/artModels';
import { fetchArt } from '../utils/artUtils';

export default class ArtService {
  static async saveArt({ id }) {
    const newArt = await fetchArt(id);
    const savedArt = await Art.insert(newArt);
    return savedArt;
  }

  static async getAllArts() {
    const allArts = await Art.getAllArts();
    return allArts;
  }

  static async getById(id) {
    const artById = await Art.getById(id);
    return artById;
  }

  static async updateArt(id, { name, collected }) {
    const art = await Art.updateArt(id, name, collected);
    return art;
  }

  static async deleteArt(id) {
    const artDelete = await Art.deleteArt(id);
    return artDelete;
  }
}
