import { Router,json } from "express";
import chefRoutes from "./ChefRoutes";
import technicienRoutes from "./TechnicienRoutes";
import serviceRoutes from "./ServiceRoutes";
<<<<<<< HEAD
import factureRoutes from "./FactureRoutes";
import succursaleRoutes from "./SuccursaleRoutes";
=======

>>>>>>> 3d739a3c60752f0272ec12c5a679b24cb30b9797
const router = Router();
router.use(json())

router.use("/chefs", chefRoutes);
router.use("/services", serviceRoutes);
<<<<<<< HEAD
router.use("/factures",factureRoutes);
router.use("/succursales",succursaleRoutes);
=======
router.use("/techniciens", technicienRoutes);


>>>>>>> 3d739a3c60752f0272ec12c5a679b24cb30b9797

export default router;
