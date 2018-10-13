'use strict'


const Knowledge = use('App/Models/Knowledge')
class KnowledgeController {

  async index () {
    return await Knowledge
      .query()
      .setVisible([
        'id',
        'name',
        'about'
      ])
      .fetch()
  }

  async store ({ request }) {
    const data = request
      .only([
        'id',
        'name',
        'about'
      ])
    return await Knowledge.create(data)
  }

  async show ({ params }) {
    const {id} = params
    return await Knowledge
      .query()
      .where('id', id)
      .fetch()
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = KnowledgeController
