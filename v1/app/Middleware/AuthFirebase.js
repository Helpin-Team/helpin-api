'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const admin = use('firebase-admin');

const config = {
  apiKey: "AIzaSyAJRLdWpa0ioh8cs95OIFL_f0t8LMzZAAY",
  authDomain: "helpin-23831.firebaseapp.com",
  databaseURL: "https://helpin-23831.firebaseio.com",
  projectId: "helpin-23831",
  storageBucket: "helpin-23831.appspot.com",
  messagingSenderId: "581193261865"
}

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
