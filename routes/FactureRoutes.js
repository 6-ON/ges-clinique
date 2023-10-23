import { Router } from "express";
import { FactureController } from "../controllers";
const router = Router();


router.get("/", FactureController.index);
router.post("/", FactureController.create);
router.delete("/:id", FactureController.delete);
router.get("/:id", FactureController.show);
router.put("/:id", FactureController.update);
export default router;