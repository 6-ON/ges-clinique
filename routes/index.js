import { Router,json } from "express";
import chefRoutes from "./ChefRoutes";
import serviceRoutes from "./ServiceRoutes";
const router = Router();
router.use(json())
router.use("/chefs", chefRoutes);
router.use("/services", serviceRoutes);

export default router;
