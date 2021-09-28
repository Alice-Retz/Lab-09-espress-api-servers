import pool from '../utils/pool';

// export default class Villager {
//   constructor(row) {}

//   static async insert({ anime, character, quote }) {
//     const { rows } = await pool.query(
//       'INSERT INTO quotes (anime, character_name, quote) VALUES ($1, $2, $3) RETURNING *',
//       [anime, character, quote]
//     );

//     return new Quote(rows[0]);
//   }
// }

// Table name: villagers
// name.name-USen, species, personality
// put information in to setup.sql
// First make table in sql file
// Then here in model
// Then pull that in to service - villager util here
// Change what info you're grabbing, either the service or utils

export default class Villager {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.species = row.species;
    this.personality = row.personality;
  }

  static async insert({ name, species, personality }) {
    console.log(name);
    const { rows } = await pool.query(
      'INSERT INTO villagers (name, species, personality) VALUES ($1, $2, $3) RETURNING *',
      [name, species, personality]
    );

    return new Villager(rows[0]);
  }
}
