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

  static async getAllFossils() {
    const { rows } = await pool.query('SELECT * FROM fossils');
    return rows.map((row) => new Fossil(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM fossils WHERE id = $1', [
      id,
    ]);
    return new Fossil(rows[0]);
  }

  static async updateFossil(id, name, collected) {
    const { rows } = await pool.query(
      `UPDATE fossils 
      SET fossil_name = $2, collected = $3 
      WHERE id = $1 RETURNING *`,
      [id, name, collected]
    );
    return new Fossil(rows[0]);
  }

  static async deleteFossil(id) {
    const { rows } = await pool.query(
      'DELETE FROM fossils WHERE id = $1 RETURNING *',
      [id]
    );
  }
}
