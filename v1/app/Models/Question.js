'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Question extends Model {
  answers () {
    return this.hasMany('App/Models/Answer')
  }

  file () {
    return this.hasMany('App/Models/File')
  }
}

module.exports = Question
