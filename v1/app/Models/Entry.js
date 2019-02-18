'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Entry extends Model {

  event () {
    return this.hasOne('App/Models/Event')
  }

  user () {
    return this.hasOne('App/Models/User')
  }

}

module.exports = Entry
