import Knex from 'knex';

//ums instancia de conexão com o banco
export async function up(knex: Knex) {
//quais alterações queremos fazer no bd
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        table.timestamp('created_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
            .notNullable();
    });
}

export async function down(knex: Knex) {
//desfazer alterações caso tenham dado erro
    return knex.schema.dropTable('connections');
}