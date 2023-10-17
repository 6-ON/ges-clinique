import { Router,json } from "express";
import chefRoutes from "./ChefRoutes";
import technicienRoutes from "./TechnicienRoutes";
const router = Router();
router.use(json())
router.use("/chefs", chefRoutes);
router.use("/techniciens", technicienRoutes);

export default router;
