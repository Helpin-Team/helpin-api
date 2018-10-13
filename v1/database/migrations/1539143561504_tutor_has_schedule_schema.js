'use strict'

const Schema = use('Schema')

class TutorHasScheduleSchema extends Schema {
  up () {
    this.create('tutor_has_schedules', (table) => {
      table.integer('tutor_id').unsigned().references('id').inTable('tutors')
      table.integer('schedule_id').unsigned().references('id').inTable('schedules')
      table.timestamps()
    })
  }

  down () {
    this.drop('tutor_has_schedules')
  }
}

module.exports = TutorHasScheduleSchema
