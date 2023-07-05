import express  from "express";
import { studentController, studentDetailController } from "../controllers/studentController.js";
const router = express.Router();

router.get('/', studentController)

router.get('/details', studentDetailController )

export default router