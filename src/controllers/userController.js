import { getAllUsers } from "../models/userModel.js";

export const getUsers = async (req, res) => {
    try {
        const users = await getAllUsers();
        res.status(200).json(users);
    }   catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error'});
    }
}