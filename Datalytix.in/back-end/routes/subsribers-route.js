const express = require('express');
const { check } = require('express-validator');
const Router = express.Router();
const SubscriberController = require('../controllers/subscriber-controller')

Router.post('/',[
    check('name').not().isEmpty(),
    check('email').isEmail()
],SubscriberController.postSub);

module.exports = Router;