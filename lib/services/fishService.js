import Fish from '../models/fishModels';
import { fetchFish } from '../utils/fishUtils';

export default class FishService {
  static async saveFish({ id }) {
    const newFish = await fetchFish(id);
    const savedFish = await Fish.insert(newFish);
    return savedFish;
  }

  static async getAllFishs() {
    const allFishs = await Fish.getAllFishs();
    return allFishs;
  }

  static async getById(id) {
    const fishById = await Fish.getById(id);
    return fishById;
  }

  static async updateFish(id, { name, collected }) {
    const fish = await Fish.updateFish(id, name, collected);
    return fish;
  }

  static async deleteFish(id) {
    const fishDelete = await Fish.deleteFish(id);
    return fishDelete;
  }
}
