import Villager from '../models/getVillagers';
import { fetchVillager } from '../utils/villagerUtils';

export default class VillagerService {
  static async saveVillager(id) {
    const newVillager = await fetchVillager(id);
    const savedVillager = await Villager.insert(newVillager.name.name - USen);
    return savedVillager;
  }
}
