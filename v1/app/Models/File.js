'use strict'

const Model = use('Model')

const Env = use('Env')

class File extends Model {
  static get computed () {
    return ['url']
  }

  getUrl ({ id }) {
    return `${ Env.get('APP_URL') }/files/${id}`
  }

  answer () {
    return this.hasOne('App/Models/Answer')
  }

  question () {
    return this.hasOne('App/Models/Question')
  }
}

module.exports = File
