import pool from '../utils/pool';

export default class Villager {
  constructor(row) {
    this.id = row.id;
    this.name = row.villager_name;
    this.species = row.species;
    this.personality = row.personality;
  }

  static async insert({ name, species, personality }) {
    console.log(name);
    const { rows } = await pool.query(
      'INSERT INTO villagers (villager_name, species, personality) VALUES ($1, $2, $3) RETURNING *',
      [name, species, personality]
    );

    return new Villager(rows[0]);
  }
}
