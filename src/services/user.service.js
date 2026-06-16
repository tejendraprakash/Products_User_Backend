const userModel = require('../models/user.models');

const createUser = async (userData) => {
    if(!userData.name) {
        throw new Error('Name is required');
    }
    return await userModel.createUser(userData);
};

const getAllUsers = async () => {
    return await userModel.getAllUsers();
};

const getUserById = async (id) => {
    return await userModel.getUserById(id);
};

const updateUser = async (id, updateData) => {
    if(!updateData.name) {
        throw new Error('Name is required');
    }
    return await userModel.updateUser(id, updateData);
};

const deleteUser = async (id) => {
    return await userModel.deleteUser(id);
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};