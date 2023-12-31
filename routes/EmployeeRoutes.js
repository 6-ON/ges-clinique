import { Router } from "express";
import { EmployeeController } from "../controllers";
const router = Router();


router.get("/", EmployeeController.index);
router.post("/", EmployeeController.create);
router.delete("/:id", EmployeeController.delete);

export default router;