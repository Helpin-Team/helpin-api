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
        "student_id"
      ])
    return await Tutor.create(tutor);
  }

  async show ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = TutorController
