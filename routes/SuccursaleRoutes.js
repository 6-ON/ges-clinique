import { Router } from "express";
import { SuccursaleController } from "../controllers";
const router = Router();


router.get("/", SuccursaleController.index);
router.post("/", SuccursaleController.create);
router.delete("/:id", SuccursaleController.delete);
router.put("/:id", SuccursaleController.update);


export default router;