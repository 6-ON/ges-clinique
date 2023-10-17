import { Router } from "express";
import { TechnicienController } from "../controllers";
const router = Router();


router.get("/", TechnicienController.index);
router.post("/", TechnicienController.create);
router.delete("/:id", TechnicienController.delete);

export default router;