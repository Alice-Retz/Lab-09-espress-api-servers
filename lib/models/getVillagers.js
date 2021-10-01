import pool from '../utils/pool';

export default class Villager {
  constructor(row) {
    this.id = row.id;
    this.name = row.villager_name;
    this.species = row.species;
    this.personality = row.personality;
  }

  static async insert({ name, species, personality }) {
    const { rows } = await pool.query(
      'INSERT INTO villagers (villager_name, species, personality) VALUES ($1, $2, $3) RETURNING *',
      [name, species, personality]
    );

    return new Villager(rows[0]);
  }

  static async getAllVillagers() {
    const { rows } = await pool.query('SELECT * FROM villagers');
    return rows.map((row) => new Villager(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM villagers WHERE id = $1', [
      id,
    ]);
    return new Villager(rows[0]);
  }

  static async updateVillager(id, name, species, personality) {
    const { rows } = await pool.query(
      `UPDATE villagers 
      SET villager_name = $2, species = $3, personality = $4 
      WHERE id = $1 RETURNING *`,
      [id, name, species, personality]
    );
    return new Villager(rows[0]);
  }
}
