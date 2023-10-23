import { Router } from "express";
import { ClientReservationController } from "../controllers";
const router = Router();


router.get("/", ClientReservationController.index);
router.post("/", ClientReservationController.create);
router.get("/:id", ClientReservationController.show);
router.put("/:id", ClientReservationController.update);


export default router;
