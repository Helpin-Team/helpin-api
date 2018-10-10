'use strict'

const Schema = use('Schema')

class TutorSchema extends Schema {
  up () {
    this.create('tutors', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('tutors')
  }
}

module.exports = TutorSchema
