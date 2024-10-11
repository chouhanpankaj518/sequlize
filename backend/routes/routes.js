import { Router } from 'express';
import { addUser , getUsers ,updateUser ,deleteUser } from '../controler/controler.js';

const router = Router();

router.post("/create", addUser);    // Create User
router.get("/showdata", getUsers);  // Get all Users
router.put("/update/:id", updateUser); // Update User by ID
router.delete("/delete/:id", deleteUser); // Delete User by ID

export default router;
