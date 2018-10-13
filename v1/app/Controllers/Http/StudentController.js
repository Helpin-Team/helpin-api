'use strict'
const Student = use('App/Models/Student')
/**
 * Resourceful controller for interacting with students
 */
class StudentController {
  /**
   * Show a list of all students.
   * GET students
   */
  async index () {
    const students = await Student
        .query()
        .fetch()

    return students
  }

  /**
   * Create/save a new student.
   * POST students
   */
  async store ({ request }) {
    const data = request.only([
      "name", 
      "email", 
      "skypeid",
      "hangoutsid",
      "whatsappid", 
      "password", 
      "birthdate", 
      "picture" 
    ]);

    const user = await Student.create(data);

    return user;
  }

  /**
   * Display a single student.
   * GET students/:id
   */
  async show ({ params }) {
    const student = await Student.find(params.id)
    return student
  }

  /**
   * Update student details.
   * PUT or PATCH students/:id
   */
  async update ({ params, request }) {

    const { id } = params

    const data = request.only([
      "name", 
      "email", 
      "skypeid",
      "hangoutsid",
      "whatsappid", 
      "password", 
      "birthdate", 
      "picture" 
    ]);
    
    const student = await Student
      .query()
      .where('id', id)
      .update(data)

    
    return student
  }

  /**
   * Delete a student with id.
   * DELETE students/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = StudentController
