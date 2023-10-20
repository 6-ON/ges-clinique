import { Router } from "express";
import { TechnicienController } from "../controllers";
const router = Router();


router.get("/", TechnicienController.index);
router.post("/", TechnicienController.create);
router.delete("/:id", TechnicienController.delete);
router.get("/:id", TechnicienController.show);

export default router;