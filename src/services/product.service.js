const productModel = require('../models/product.models');

const createProduct = async (productData) => {
    if (!productData.name) {
        throw new Error('Name is required');
    }
    return await productModel.createProduct(productData);
};

const getAllProducts = async () => {
    return await productModel.getAllProducts();
};

const getProductById = async (id) => {
    return await productModel.getProductById(id);
};

const updateProduct = async (id, updateData) => {
    if (updateData.name === '') {
        throw new Error('Name is required');
    }
    return await productModel.updateProduct(id, updateData);
};

const deleteProduct = async (id) => {
    return await productModel.deleteProduct(id);
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
};
