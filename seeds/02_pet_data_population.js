/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pet').del()
  await knex('pet').insert([
    {id: 1, name: 'Terabyte', pet_type_id: 3},
    {id: 2, name: 'Yoshi', pet_type_id: 3},
    {id: 3, name: 'Nala', pet_type_id: 3},
    {id: 4, name: 'Kikomon', pet_type_id: 4},
  ]);
};
