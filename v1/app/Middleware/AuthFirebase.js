'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const admin = use('firebase-admin');
const Config = use('Config')

const config = Config.get('firebase');
admin.initializeApp(config);

class AuthFirebase {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */

  async handle ({ request, response }, next) {
    // call next to advance the request

    const token = request.header('token')
    admin.auth().verifyIdToken(token)
      .then(function(decodedToken) {

        var uid = decodedToken.uid;

        User

        return uid;

      }).catch(function(error) {
        return response.status(401).send(error)
      })

    await next()
  }
}

module.exports = AuthFirebase
