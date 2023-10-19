import { Router } from "express";
import { ClientController } from "../controllers";
const router = Router();


router.get("/", ClientController.index);
router.get("/:id", ClientController.show);
router.post("/", ClientController.create);
router.delete("/:id", ClientController.delete);

export default router;