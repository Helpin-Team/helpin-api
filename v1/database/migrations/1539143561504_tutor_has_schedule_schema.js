'use strict'

const Schema = use('Schema')

class TutorHasScheduleSchema extends Schema {
  up () {
    this.create('tutor_has_schedules', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('tutor_has_schedules')
  }
}

module.exports = TutorHasScheduleSchema
