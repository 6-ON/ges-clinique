import { Router,json } from "express";
import chefRoutes from "./ChefRoutes";
import AuthRoutes from "./AuthRoutes";
import technicienRoutes from "./TechnicienRoutes";
import serviceRoutes from "./ServiceRoutes";
import succursaleRoutes from "./SuccursaleRoutes";
import factureRoutes from "./FactureRoutes";
const router = Router();
router.use(json())

router.use("/chefs", chefRoutes);
router.use("/auth", AuthRoutes)
router.use("/services", serviceRoutes);
router.use("/techniciens", technicienRoutes);
router.use("/succursales", succursaleRoutes);
router.use("/factures", factureRoutes);



export default router;
