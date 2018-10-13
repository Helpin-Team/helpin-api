'use strict'

const Schema = use('Schema')

class TutorSchema extends Schema {
  up () {
    this.create('tutors', (table) => {
      table.increments()
      table.boolean('status').notNullable()
      table.integer('student_id').unsigned()
      table.foreign('student_id').references('id').inTable('students') 
      table.timestamps()
    })
  }

  down () {
    this.drop('tutors')
  }
}

module.exports = TutorSchema
