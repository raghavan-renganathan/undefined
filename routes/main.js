/**
 * Created by raghavan on 13/6/17.
 * @description: main
 */
const express = require('express');
const router = express.Router();
const config = require('../config');
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendfile(path.join(config.directories.build, config.files.mainHTML));
});

router.use(config.server.assetsPath.publicDir, express.static(config.directories.publicDir));
router.use(config.server.assetsPath.images, express.static(config.directories.images));

module.exports = router;
