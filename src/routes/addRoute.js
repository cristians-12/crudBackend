import { Router } from "express";
import { getAdd,aggAdd } from "../controllers/addController.js";

const router = Router();

router.get("/getAdd", getAdd)
router.post("/aggAdd", aggAdd)

export default router;
