import { Router } from "express";
import { FactureController } from "../controllers";
const router = Router();


router.get("/", FactureController.index);
router.post("/", FactureController.create);
router.delete("/:id", FactureController.delete);

export default router;