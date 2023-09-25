import { Router } from "express";
import { createBlog } from "../controllers/createBlog";

const router = Router()
router.post("/",createBlog)
export default router