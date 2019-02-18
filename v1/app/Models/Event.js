'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Event extends Model {
  entry () {
    return this.hasMany('App/Models/Entry')
  }

  user () {
    return this.hasOne('App/Models/User')
  }

}

module.exports = Event