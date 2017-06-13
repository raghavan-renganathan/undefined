/**
 * Created by raghavan on 13/6/17.
 * @description: login.js
 */
const express = require('express');
const router = express.Router();
const config = require('../config');
const path = require('path');

/* Show the login page. */
router.get('/', function(req, res, next) {
    res.sendfile(path.join(config.directories.build, config.files.loginHTML));
});

router.use(config.server.assetsPath.publicDir, express.static(config.directories.publicDir));
router.use(config.server.assetsPath.images, express.static(config.directories.images));

module.exports = router;