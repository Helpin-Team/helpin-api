'use strict'

const Schema = use('Schema')

class LectureSchema extends Schema {
  up () {
    this.create('lectures', (table) => {
      table.increments()
      table.boolean('status').notNullable()
      table.integer('schedule_id').unsigned().references('id').inTable('schedules')
      table.integer('tutor_id').unsigned().references('id').inTable('tutors')
      table.integer('knowledge_id').unsigned().references('id').inTable('knowledges')
      table.integer('student_id').unsigned().references('id').inTable('students')
      table.timestamps()
    })
  }

  down () {
    this.drop('lectures')
  }
}

module.exports = LectureSchema
