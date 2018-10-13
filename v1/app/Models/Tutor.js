'use strict'

const Model = use('Model')

class Tutor extends Model {
    student () {
      return this.belongsTo('App/Models/Student')
    }
}

module.exports = Tutor
