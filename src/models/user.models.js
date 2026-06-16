const {ObjectId} = require('mongodb');
const {getDB} = require('../config/db');

const userCollections = () => {
    return getDB().collection('users');
};

const createUser = async (userData) => {
    const result = await userCollections().insertOne(userData);
    return await userCollections().findOne({_id: result.insertedId});
};

const getAllUsers = async () => {
    return await userCollections().find({}).toArray();
};

const getUserById = async (id) => {
    return await userCollections().findOne({_id: new ObjectId(id)});
};

const updateUser = async (id, updateData) => {
    return await userCollections().updateOne({_id: new ObjectId(id)}, {$set: updateData});
};

const deleteUser = async (id) => {
    return await userCollections().deleteOne({_id: new ObjectId(id)});
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
};