'use strict'

const Schema = use('Schema')

class StudentSchema extends Schema {
  up () {
    this.create('students', (table) => {
      table.increments()
      table.string('name', 255)
      table.string('skypeid', 255)
      table.string('password', 255)
      table.string('birthdate', 255)
      table.string('picture', 255)
      table.string('score', 255)
      table.string('created', 255)
      table.string('modified', 255)
      table.timestamps()
    })
  }

  down () {
    this.drop('students')
  }
}

module.exports = StudentSchema
