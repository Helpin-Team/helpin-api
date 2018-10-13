'use strict'

const Schema = use('Schema')

class KnowledgeSchema extends Schema {
  up () {
    this.create('knowledges', (table) => {
      table.increments()
      table.string('name')
      table.string('about')
      table.integer('student_id').unsigned()
      table.foreign('student_id').references('id').inTable('students')
      table.timestamps()
    })
  }

  down () {
    this.drop('knowledges')
  }
}

module.exports = KnowledgeSchema
