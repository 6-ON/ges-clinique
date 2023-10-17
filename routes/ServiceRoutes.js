import { Router } from "express";
import { ServiceController } from "../controllers";
const router = Router();


router.get("/", ServiceController.index);
router.post("/", ServiceController.create);
router.delete("/:id", ServiceController.delete);

export default router;