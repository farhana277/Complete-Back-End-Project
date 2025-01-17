const express = require('express');
const { getHello } = require('../controllers/helloController');
const { getToken } = require('../controllers/tokenController');
const { postBody } = require('../controllers/postController');

const router = express.Router();

router.get('/hello', getHello);
router.get('/token', getToken);
router.post('/post', postBody);

module.exports = router;
