'use strict'

const Model = use('Model')
const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  addresses () {
    return this.hasMany('App/Models/UserAddress')
  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }

  entry () {
    return this.hasMany('App/Models/Entry')
  }

  event () {
    return this.hasMany('App/Models/Event')
  }

  questions () {
    return this.hasMany('App/Models/Question')
  }

  answers () {
    return this.hasMany('App/Models/Answer')
  }

  userHasKnowledges () {
    return this.hasMany('App/Models/UserHasKnowledge')
  }

  projects () {
    return this.hasMany('App/Models/Project')
  }

  tasks () {
    return this.hasMany('App/Models/Task')
  }
}

module.exports = User
