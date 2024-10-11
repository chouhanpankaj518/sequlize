
import User from "../user.model.js";

// Add a new user
export const addUser = async (req, res) => {
    const { username, email } = req.body;
    try {
        const newUser = await User.create({ username, email });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: "Error creating user" });
    }
};

// Get all users
export const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Error fetching users" });
    }
};

// Update user by ID
export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { username, email } = req.body;
    try {
        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({ error: "User not found" });

        user.username = username || user.username;
        user.email = email || user.email;
        await user.save();
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "Error updating user" });
    }
};

// Delete user by ID
export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({ error: "User not found" });

        await user.destroy();
        res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting user" });
    }
};
