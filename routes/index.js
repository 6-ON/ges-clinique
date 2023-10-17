import { Router,json } from "express";
import chefRoutes from "./ChefRoutes";
import serviceRoutes from "./ServiceRoutes";
import factureRoutes from "./FactureRoutes";
import succursaleRoutes from "./SuccursaleRoutes";
const router = Router();
router.use(json())
router.use("/chefs", chefRoutes);
router.use("/services", serviceRoutes);
router.use("/factures",factureRoutes);
router.use("/succursales",succursaleRoutes);

export default router;
