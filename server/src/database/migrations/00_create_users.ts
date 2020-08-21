import Knex from 'knex';

//ums instancia de conexão com o banco
export async function up(knex: Knex) {
//quais alterações queremos fazer no bd
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    });
}

export async function down(knex: Knex) {
//desfazer alterações caso tenham dado erro
    return knex.schema.dropTable('users');
}