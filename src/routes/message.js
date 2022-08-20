const express = require('express')
const router = express.Router();
const MessageControllers = require('../app/controllers/MessageControllers');

router.post('/', MessageControllers.addMessage);
router.get('/:chatId', MessageControllers.getMessages);

module.exports = router;