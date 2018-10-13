'use strict'
const Tutor = use('App/Models/Tutor')
class TutorController {

  async index () {
    return await Tutor
      .query()
      .with('student')
      .fetch()
  }

  async store ({ request }) {
    const tutor = request
      .only([
        "student_id",
        "status"
      ])
    return await Tutor.create(tutor);
  }

  async show ({ params }) {
    const {id} = params
    return await Tutor
      .query()
      .with('student')
      .where('id', id)
      .fetch()
  }

  async update ({ params, request }) {
    const {id} = params

    const data = request
      .only([
        "status"
      ])

    return await Tutor
      .query()
      .where('id', id)
      .update(data)
  }
}

module.exports = TutorController
