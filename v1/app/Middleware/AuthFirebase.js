'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const admin = use('firebase-admin');
const config = require('../../config/firebase')


admin.initializeApp(config);

class AuthFirebase {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */

  async handle ({ request, response }, next) {
    // call next to advance the request
    const idToken = request.header('idToken')



    admin.auth().verifyIdToken(idToken)
      .then(function(decodedToken) {

        var uid = decodedToken.uid;
        return uid;

      }).catch(function(error) {

        return response.status(401).send()
      })



    await next()
  }
}

module.exports = AuthFirebase
