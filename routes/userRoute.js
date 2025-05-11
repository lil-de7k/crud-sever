import express from "express"

import { create, getAllUsers, getUserByID, update, deleteUser } from '../controller/userController.js'

const route = express.Router();

route.post("/user", create)
route.get("/user", getAllUsers)
route.get("/user/:id", getUserByID)
route.put("/update/user/:id", update)
route.delete("/delete/user/:id", deleteUser)

export default route;