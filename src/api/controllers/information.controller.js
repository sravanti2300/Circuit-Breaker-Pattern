const httpStatus = require('http-status');
const { pick } = require('lodash');
const { getDetails } = require('../services/thirdParty');

/**
 * fetch the information from third party service config
 * @public
 */
exports.information = async (req, res, next) => {
  try {
    const data = await getDetails();
    return res.status(httpStatus.OK).json({ code: httpStatus.OK, data, message: 'information fetched successfully' });
  } catch (err) {
    return next(err);
  }
};


/**
 * fetch the circuit breaker status
 * @public
 */
exports.status = async (req, res, next) => {
    try {
      const status = await getStatus();
      return res.status(httpStatus.OK).json({ code: httpStatus.OK, status, message: 'circuit breaker status fetched successfully' });
    } catch (err) {
      return next(err);
    }
  };