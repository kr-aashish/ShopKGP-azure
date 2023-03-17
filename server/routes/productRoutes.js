const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/all', productController.getAllProducts);

router.get('/get/:id', productController.getProductbyId);

router.post('/create/', productController.createProduct);

router.put('/update/:id', productController.updateProduct);

router.delete('/delete/:id', productController.deleteProduct);

module.exports = router;