import Fossil from '../models/fossilModels';
import { fetchFossil } from '../utils/fossilUtils';

export default class FossilService {
  static async saveFossil({ id }) {
    const newFossil = await fetchFossil(id);
    const savedFossil = await Fossil.insert(newFossil);
    return savedFossil;
  }

  static async getAllFossils() {
    const allFossils = await Fossil.getAllFossils();
    return allFossils;
  }

  static async getById(id) {
    const fossilById = await Fossil.getById(id);
    return fossilById;
  }

  static async updateFossil(id, { name, collected }) {
    const fossil = await Fossil.updateFossil(id, name, collected);
    return fossil;
  }
}
