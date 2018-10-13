'use strict'

/**
 * Resourceful controller for interacting with knowledges
 */
class KnowledgeController {
  /**
   * Show a list of all knowledges.
   * GET knowledges
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new knowledge.
   * GET knowledges/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new knowledge.
   * POST knowledges
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single knowledge.
   * GET knowledges/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing knowledge.
   * GET knowledges/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update knowledge details.
   * PUT or PATCH knowledges/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a knowledge with id.
   * DELETE knowledges/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = KnowledgeController
