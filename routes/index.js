import { Router,json } from "express";
import chefRoutes from "./ChefRoutes";
const router = Router();
router.use(json())
router.use("/chefs", chefRoutes);

export default router;
