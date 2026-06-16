const {ObjectId} = require('mongodb');
const {getDB} = require('../config/db');

const productCollection = () => getDB().collection('products');

const createProduct = async (productData) => {
    const result = await productCollection().insertOne(productData);
    return await productCollection().findOne({_id: result.insertedId});
};

const getAllProducts = async () => {
    return await productCollection().find({}).toArray();
};

const getProductById = async (id) => {
    return await productCollection().findOne({_id: new ObjectId(id)});
};

const updateProduct = async (id, updateData) => {
    return await productCollection().updateOne({_id: new ObjectId(id)}, {$set: updateData});
};

const deleteProduct = async (id) => {
    return await productCollection().deleteOne({_id: new ObjectId(id)});
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
};
