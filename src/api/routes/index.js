const express = require('express');

const infoRoutes = require('./config.route');

const router = express.Router();

/**
 * GET /status
 */
router.get('/api/health', (req, res) => res.send({ status: 'OK' }));

/**
 * API Routes
 */
router.use('/api/v1/info', infoRoutes);

module.exports = router;