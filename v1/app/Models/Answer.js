'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Answer extends Model {

  user () {
    return this.hasOne('App/Models/User')
  }

  question () {
    return this.hasOne('App/Models/Question')
  }

  file () {
    return this.hasMany('App/Models/File')
  }

}

module.exports = Answer
