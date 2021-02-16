const express = require('express');
const router = express.Router();

const { getAllProps, getPropById } = require('../controller/propControllers');

//@desc     GET all props from db
//@route    GET /api/props
//@access   Public
router.get('/', getAllProps);

//@desc     GET a prop by id from db
//@route    GET /api/props/:id
//@access   Public
router.get('/:id', getPropById);

module.exports = router;
