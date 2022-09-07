const router = require('express').Router
const controller = requite('../controller/paynow')
router.post('/register', controller.paynow)