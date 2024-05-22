import express from 'express'
import wrap from 'express-async-wrap'

const router = new express.Router()
export default router

/**
 * @swagger
 *'/public/health/v1/ping':
 *    get:
 *      tags:
 *        - Health
 *      summary: Tests express and event loop responsiveness
 *      description: |
 *        Tests express and event loop responsiveness
 *      responses:
 *        '200':
 *          description: Returns pong
 *        '500':
 *          description: Status 500, something went wrong
 */

router.get('/public/health/v1/ping', (req, resp) => resp.end('pong'))

/**
 * @swagger
 *'/health/v1/all':
 *    get:
 *      tags:
 *        - Health
 *      summary: Tests remote and local dependencies
 *      description: |
 *        Should be monitored for errors that need immediate attention, but should not be used to restart the service.
 *      responses:
 *        '200':
 *          description: "Returns JSON { remote: OK } or an error message indicating what is wrong"
 *        '500':
 *          description: Status 500, something went wrong
 */
router.get('/health/v1/all', wrap(health))

async function health(req, resp) {
  return resp.json({ status: 'OK' })
}
