import { Router } from "express";
import { ReclamationController } from "../controllers";
const router = Router();


router.get("/", ReclamationController.index);
router.post("/", ReclamationController.create);
router.delete("/:id", ReclamationController.delete);
router.get("/:id", ReclamationController.show);

export default router;
