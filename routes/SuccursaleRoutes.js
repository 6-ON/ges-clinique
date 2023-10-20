import { Router } from "express";
import { SuccursaleController } from "../controllers";
const router = Router();


router.get("/", SuccursaleController.index);
router.post("/", SuccursaleController.create);
router.delete("/:id", SuccursaleController.delete);

export default router;