import { Router } from "express";
import { ChefController } from "../controllers";
const router = Router();


router.get("/", ChefController.index);
router.post("/", ChefController.create);
router.delete("/:id", ChefController.delete);

export default router;