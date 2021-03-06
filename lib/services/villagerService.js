import Villager from '../models/getVillagers';
import { fetchVillager } from '../utils/villagerUtils';

export default class VillagerService {
  static async saveVillager({ id }) {
    const newVillager = await fetchVillager(id);
    const savedVillager = await Villager.insert(newVillager);
    return savedVillager;
  }

  static async getAllVillagers() {
    const allVillagers = await Villager.getAllVillagers();
    return allVillagers;
  }

  static async getById(id) {
    const villagerById = await Villager.getById(id);
    return villagerById;
  }

  static async updateVillager(id, { name, species, personality }) {
    const villager = await Villager.updateVillager(
      id,
      name,
      species,
      personality
    );
    return villager;
  }

  static async deleteVillager(id) {
    const villagerDelete = await Villager.deleteVillager(id);
    return villagerDelete;
  }
}
