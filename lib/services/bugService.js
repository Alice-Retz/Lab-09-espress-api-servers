import Bug from '../models/bugModels';
import { fetchBug } from '../utils/bugUtils';

export default class BugService {
  static async saveBug({ id }) {
    const newBug = await fetchBug(id);
    const savedBug = await Bug.insert(newBug);
    return savedBug;
  }

  static async getAllBugs() {
    const allBugs = await Bug.getAllBugs();
    return allBugs;
  }

  static async getById(id) {
    const bugById = await Bug.getById(id);
    return bugById;
  }

  static async updateBug(id, { name, collected }) {
    const bug = await Bug.updateBug(id, name, collected);
    return bug;
  }

  static async deleteBug(id) {
    const bugDelete = await Bug.deleteBug(id);
    return bugDelete;
  }
}
