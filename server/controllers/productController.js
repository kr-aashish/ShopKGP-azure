const { product } = require('../models');
const getRandomUuid = require('../utils/generateUuid')

const getProductbyId = async (req, res) => {
    try {
        const productData = await product.findByPk(req.params.id);
        if (!productData) {
            res.status(404).json({
                message: 'Product not found',
            });
            return;
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Error in fetching product',
        });
    }
}

const getAllProducts = async (req, res) => {
    try {
        const allProducts = await product.findAll();
        res.status(200).json(allProducts);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Error in fetching products',
        });
    }
}

const createProduct = async (req, res) => {
    try {
        console.log("This is the request", req.body);
        let {itemId, sellerId, name, description, price, imageUrl, category} = req.body;

        // itemId = itemId.length ? itemId : getRandomUuid();
        // sellerId = sellerId.length ? sellerId : getRandomUuid();
        itemId = itemId && itemId.length ? itemId : getRandomUuid();
        sellerId = sellerId && sellerId.length ? sellerId : getRandomUuid();

        const productMetaData = await product.create({
            itemId, 
            sellerId, 
            name, 
            description, 
            price, 
            imageUrl, 
            category,
        });
        res.status(200).json(productMetaData);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Error creating product',
        });
    }
}

const updateProduct = async (req, res) => {
    try {
        const {itemId, sellerId, name, description, price, imageUrl, category} = req.body;

        if (!itemId || !sellerId || !name || !description || !price || !category) {
            return res.status(400).json({
                message: 'All fields are required',
            });
        }

        const productData = await product.findByPk(req.params.id);
        if (!productData) {
            res.status(404).json({
                message: 'Product not found',
            });
            return;
        }

        productData.itemId = itemId;
        productData.sellerId = sellerId;
        productData.name = name;
        productData.description = description;
        productData.price = price;
        productData.imageUrl = imageUrl;
        productData.category = category;
        await productData.save();

        res.json(productData);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Error updating product',
        });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const productData = await product.findByPk(req.params.id);
        if (!productData) {
            res.status(404).json({
                message: 'Product not found',
            });
            return;
        }
        await productData.destroy();
        res.status(200).json({
            message: "Product deleted successfully"
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Error in deleting product',
        });
    }
}

module.exports = {
    getProductbyId, 
    getAllProducts, 
    createProduct, 
    updateProduct, 
    deleteProduct
};