import Knex from 'knex';

//ums instancia de conexão com o banco
export async function up(knex: Knex) {
//quais alterações queremos fazer no bd
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

export async function down(knex: Knex) {
//desfazer alterações caso tenham dado erro
    return knex.schema.dropTable('classes');
}