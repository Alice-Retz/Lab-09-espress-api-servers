import pool from '../utils/pool';

export default class Art {
  constructor(row) {
    this.id = row.id;
    this.name = row.art_name;
    this.collected = row.collected;
  }

  static async insert({ name, collected }) {
    const { rows } = await pool.query(
      'INSERT INTO arts (art_name, collected) VALUES ($1, $2) RETURNING *',
      [name, collected]
    );

    return new Art(rows[0]);
  }

  static async getAllArts() {
    const { rows } = await pool.query('SELECT * FROM arts');
    return rows.map((row) => new Art(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM arts WHERE id = $1', [id]);
    return new Art(rows[0]);
  }

  static async updateArt(id, name, collected) {
    const { rows } = await pool.query(
      `UPDATE arts 
      SET art_name = $2, collected = $3 
      WHERE id = $1 RETURNING *`,
      [id, name, collected]
    );
    return new Art(rows[0]);
  }

  static async deleteArt(id) {
    const { rows } = await pool.query(
      'DELETE FROM arts WHERE id = $1 RETURNING *',
      [id]
    );
  }
}
