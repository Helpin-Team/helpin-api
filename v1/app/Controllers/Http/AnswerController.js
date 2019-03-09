'use strict'

const Answer = use('App/Models/Answer')

class AnswerController {

  async index () {
    const answers = await Answer.query()
      .fetch()
    return answers
  }

  async store ({ request, params }) {
    const data = request.only([
      'description',
      'uid'
    ])
    const answer = await Answer.create({ ...data, question_id: params.questions_id })

    return answer
  }

  async update ({ params, request }) {
    const answer = await Answer.findOrFail(params.id)
    const data = request.only([
      'description'
    ])

    answer.merge(data)

    await answer.save()

    return answer
  }

  async destroy ({ params }) {
    const answer = await Answer.findOrFail(params.id)

    await answer.delete()
  }
}

module.exports = AnswerController
