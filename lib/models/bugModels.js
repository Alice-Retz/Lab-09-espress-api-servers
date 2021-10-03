import pool from '../utils/pool';

export default class Bug {
  constructor(row) {
    this.id = row.id;
    this.name = row.bug_name;
    this.collected = row.collected;
  }

  static async insert({ name, collected }) {
    const { rows } = await pool.query(
      'INSERT INTO bugs (bug_name, collected) VALUES ($1, $2) RETURNING *',
      [name, collected]
    );

    return new Bug(rows[0]);
  }

  static async getAllBugs() {
    const { rows } = await pool.query('SELECT * FROM bugs');
    return rows.map((row) => new Bug(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM bugs WHERE id = $1', [id]);
    return new Bug(rows[0]);
  }

  static async updateBug(id, name, collected) {
    const { rows } = await pool.query(
      `UPDATE bugs 
      SET bug_name = $2, collected = $3 
      WHERE id = $1 RETURNING *`,
      [id, name, collected]
    );
    return new Bug(rows[0]);
  }

  static async deleteBug(id) {
    const { rows } = await pool.query(
      'DELETE FROM bugs WHERE id = $1 RETURNING *',
      [id]
    );
  }
}
