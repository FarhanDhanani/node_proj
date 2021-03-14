const express = require('express')
const router = express.Router()
const categoryController =   require('../controllers/category_controller');
// Retrieve all categories
router.get('/', categoryController.findAll);
// Create a new categories
router.post('/', categoryController.create);
// Retrieve a single categories with id
router.get('/:id', categoryController.findById);
// Update a categories with id
router.put('/:id', categoryController.update);
// Delete a categories with id
router.delete('/:id', categoryController.delete);
module.exports = router