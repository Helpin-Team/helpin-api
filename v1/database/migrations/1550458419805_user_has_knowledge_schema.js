'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserHasKnowledgeSchema extends Schema {
  up () {
    this.create('user_has_knowledges', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table
        .integer('knowledge_id')
        .unsigned()
        .references('id')
        .inTable('knowledges')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.timestamps()
    })
  }

  down () {
    this.drop('user_has_knowledges')
  }
}

module.exports = UserHasKnowledgeSchema
