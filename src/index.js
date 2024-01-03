const { logger } = require('./config/logger');
Promise = require('bluebird');

const { port, env } = require('./config/vars');
const app = require('./config/express');


// listen to requests
app.listen(port, () => logger.info(`Server started on port ${port} (${env})`));

module.exports = app;