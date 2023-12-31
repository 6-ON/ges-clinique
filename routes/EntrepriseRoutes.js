import { Router } from "express";
import { ClientEntrepriseController } from "../controllers";
const router = Router();


router.get("/", ClientEntrepriseController.index);
router.post("/", ClientEntrepriseController.create);
router.delete("/:id", ClientEntrepriseController.delete);
router.get("/:id", ClientEntrepriseController.show);
router.put("/:id", ClientEntrepriseController.update);

export default router;