'use strict'

const Schema = use('Schema')

class LectureSchema extends Schema {
  up () {
    this.create('lectures', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('lectures')
  }
}

module.exports = LectureSchema
