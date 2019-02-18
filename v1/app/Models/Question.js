'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Question extends Model {
  answers () {
    return this.hasMany('App/Models/Answer')
  }

  user () {
    return this.hasOne('App/Models/User')
  }

  file () {
    return this.hasMany('App/Models/File')
  }
}

module.exports = Question