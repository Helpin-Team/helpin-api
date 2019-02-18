'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class KnowledgeSchema extends Schema {
  up () {
    this.create('knowledges', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('knowledges')
  }
}

module.exports = KnowledgeSchema
