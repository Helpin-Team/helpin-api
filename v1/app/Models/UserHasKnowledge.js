'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UserHasKnowledge extends Model {
  user () {
    return this.hasOne('App/Models/User')
  }

  knowledge () {
    return this.hasOne('App/Models/Knowledge')
  }
}

module.exports = UserHasKnowledge
