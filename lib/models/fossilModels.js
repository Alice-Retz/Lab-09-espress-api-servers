import pool from '../utils/pool';

export default class Fossil {
  constructor(row) {
    this.id = row.id;
    this.name = row.fossil_name;
    this.collected = row.collected;
  }

  static async insert({ name, collected }) {
    const { rows } = await pool.query(
      'INSERT INTO fossils (fossil_name, collected) VALUES ($1, $2) RETURNING *',
      [name, collected]
    );

    return new Fossil(rows[0]);
  }
}
