const productService = require('../services/product.service');

const createProduct = async (req, res) => {
    try {
        const result = await productService.createProduct(req.body);
        res.status(201).json({ sucess: true, data: result });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

const getAllProducts = async (req, res) => {
    try {
        const result = await productService.getAllProducts();
        res.status(200).json({ success: true, data: result });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

const getProductById = async (req, res) => {
    try {
        const result = await productService.getProductById(req.params.id);
        res.status(200).json({ success: true, data: result });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const result = await productService.updateProduct(req.params.id, req.body);
        res.status(200).json({ success: true, data: result });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const result = await productService.deleteProduct(req.params.id);
        res.status(200).json({ success: true, data: result });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
};
