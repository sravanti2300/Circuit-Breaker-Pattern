const express = require('express');
const controller = require('../../controllers/information.controller');

const router = express.Router();

router
  .route('/')
  /**
   * @api {get} api/v1/getInfo get information
   * @apiDescription Fetch Information from the third party API
   * @apiVersion 1.0.0
   * @apiName fetch info
   * @apiGroup information 
   * @apiHeader {String} Authorization  User's access token
   *
   * @apiSuccess {Object} Users
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admin can access the data
   */
  .post(controller.information);

router
  .route('/circuit/status')
  /**
   * @api {get} api/v1/getInfo/circuit/status add feature for create collection
   * @apiDescription fetches the circuit breaker status
   * @apiVersion 1.0.0
   * @apiName fetch info
   * @apiGroup information
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization  User's access token
   *
   * @apiSuccess {Object} Users
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admin can access the data
   */
  .get(controller.status);
