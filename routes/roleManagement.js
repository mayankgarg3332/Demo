const { getRoles } = require('../controller/roleManagement');

const router = require('express').Router();

router.get('/', getRoles)

module.exports = router