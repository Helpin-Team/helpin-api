'use strict'

const Question = use('App/Models/Question')

class QuestionController {

  async index () {
    const questions = await Question.query()
      .fetch()
    return questions
  }

  async store ({ request }) {
    const data = request.only([
      'title',
      'description',
      'status',
      'uid'
    ])

    const questions = await Question.create({ ...data })

    return questions
  }

  async show ({ params }) {
    const question = await Question.findOrFail(params.id)

    return question
  }
  async update ({ params, request, response }) {
    const question = await Question.findOrFail(params.id)
    const data = request.only([
      'title',
      'description',
      'status'
    ])

    question.merge(data)

    await question.save()

    return question
  }
  async destroy ({ params }) {
    const question = await Question.findOrFail(params.id)

    await question.delete()
  }
}

module.exports = QuestionController
