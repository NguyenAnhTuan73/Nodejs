import express  from "express";
import { userController, userDetailController } from "../controllers/userController.js";
const router = express.Router()

router.get('/details', userDetailController)
router.get('/', userController)

export default router