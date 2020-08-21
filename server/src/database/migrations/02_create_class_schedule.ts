import Knex from 'knex';

//ums instancia de conexão com o banco
export async function up(knex: Knex) {
//quais alterações queremos fazer no bd
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary();

        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();

        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

export async function down(knex: Knex) {
//desfazer alterações caso tenham dado erro
    return knex.schema.dropTable('class_schedule');
}