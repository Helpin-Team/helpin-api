'use strict'

const Route = use('Route')

Route.get('/files/:id', 'FileController.show')

Route.group(() => {

  Route.post('/files', 'FileController.store')

  Route.resource('questions', 'QuestionController')
    .apiOnly()

  Route.resource('questions.answers', 'AnswerController')
    .apiOnly()

}).middleware(['firebase'])
