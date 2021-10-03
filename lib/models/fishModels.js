import pool from '../utils/pool';

export default class Fish {
  constructor(row) {
    this.id = row.id;
    this.name = row.fish_name;
    this.collected = row.collected;
  }

  static async insert({ name, collected }) {
    const { rows } = await pool.query(
      'INSERT INTO fishs (fish_name, collected) VALUES ($1, $2) RETURNING *',
      [name, collected]
    );

    return new Fish(rows[0]);
  }

  static async getAllFishs() {
    const { rows } = await pool.query('SELECT * FROM fishs');
    return rows.map((row) => new Fish(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM fishs WHERE id = $1', [
      id,
    ]);
    return new Fish(rows[0]);
  }

  static async updateFish(id, name, collected) {
    const { rows } = await pool.query(
      `UPDATE fishs 
      SET fish_name = $2, collected = $3 
      WHERE id = $1 RETURNING *`,
      [id, name, collected]
    );
    return new Fish(rows[0]);
  }

  static async deleteFish(id) {
    const { rows } = await pool.query(
      'DELETE FROM fishs WHERE id = $1 RETURNING *',
      [id]
    );
  }
}
