'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Knowledge extends Model {

  userHasKnowledge () {
    return this.hasMany('App/Models/UserHasKnowledge')
  }

}

module.exports = Knowledge
