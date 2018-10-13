'use strict'

const Model = use('Model')

class Knowledge extends Model {
    student () {
        return this.belongsTo('App/Models/Student')
      }
}

module.exports = Knowledge
