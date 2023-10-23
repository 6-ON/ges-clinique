import { Router } from "express";
import { AdminController } from "../controllers/AdminController";
const router = Router();


router.get("/", AdminController.index);
router.post("/", AdminController.create);
router.get("/:id", AdminController.show);
router.put("/:id", AdminController.update);
router.delete("/:id", AdminController.delete);

export default router;