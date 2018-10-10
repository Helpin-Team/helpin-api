'use strict'

const Schema = use('Schema')

class StudentSchema extends Schema {
  up () {
    this.create('students', (table) => {
      table.increments() //auto increment
      table.string('name', 255).notNullable()
      table.string('skypeid', 255).notNullable().unique()
      table.string('password', 255).notNullable()
      table.date('birthdate').notNullable()
      table.string('picture', 255)
      table.double('score')
      table.timestamps() //created_at e updated_at
    })
  }

  down () {
    this.drop('students')
  }
}

module.exports = StudentSchema
