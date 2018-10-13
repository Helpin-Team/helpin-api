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
        'student_id',
        'name',
        'about'
      ])

    return await Knowledge.create(data)
  }

  async show ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = KnowledgeController
