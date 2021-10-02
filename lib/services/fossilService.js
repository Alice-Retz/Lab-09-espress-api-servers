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
}
