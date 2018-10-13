'use strict'

const Knowledge = use('App/Models/Knowledge')

class KnowledgeController {
 
  async index () {
    return await Knowledge
      .query()
      .setVisible([
        'id',
        'student_id',
        'name',
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
      data['status'] = 'true';

    return await Knowledge.create(data)
  }

  async show ({ params }) {
    const { id } = params
    return await Knowledge
      .find( id )
  }

  async update ({ params, request }) {
    const { id } = params
    
    const data = request
    .only([
      'student_id',
      'name',
      'about',
      'status'
    ])

    return await Knowledge
      .query()
      .where('id', id)
      .update(data)

  }
}

module.exports = KnowledgeController
