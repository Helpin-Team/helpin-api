'use strict'

const Model = use('Model')

class Student extends Model {
    student () {
        return this.belongsTo('App/Models/Student')
    }
}

module.exports = Student
