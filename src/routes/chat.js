const express = require('express')
const router = express.Router();
const chatControllers = require('../app/controllers/ChatControllers')

router.post('/', chatControllers.createChat);
router.get('/:userId', chatControllers.userChats);
router.get('/find/:firstId/:secondId', chatControllers.findChat);

module.exports = router;