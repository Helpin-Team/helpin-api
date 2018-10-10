'use strict'

const Schema = use('Schema')

class KnowledgeHasTutorSchema extends Schema {
  up () {
    this.create('knowledge_has_tutors', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('knowledge_has_tutors')
  }
}

module.exports = KnowledgeHasTutorSchema
