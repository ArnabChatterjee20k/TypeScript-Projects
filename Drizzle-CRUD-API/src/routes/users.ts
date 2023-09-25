import { Router } from "express";
import { createUser } from "../controllers/createUser";
import getUsers from "../controllers/getUsers";
import updateUser from "../controllers/updateUser";
import deleteUser from "../controllers/deleteUser";

const router = Router()
router.post("/",createUser)
router.get("/",getUsers)
router.patch("/:userId",updateUser)
router.delete("/:userId",deleteUser)
export default router