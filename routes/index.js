import { Router,json } from "express";
import chefRoutes from "./ChefRoutes";

import ReclamationRoutes from "./ReclamationRoutes";
import EmployeeRoutes from "./EmployeeRoutes";

import ClientRoutes from "./ClientRoutes";

import AuthRoutes from "./AuthRoutes";
import technicienRoutes from "./TechnicienRoutes";
import serviceRoutes from "./ServiceRoutes";
import factureRoutes from "./FactureRoutes";
import succursaleRoutes from "./SuccursaleRoutes";

const router = Router();
router.use(json())
router.use("/reclamations", ReclamationRoutes);
router.use("/employees", EmployeeRoutes);
router.use("/chefs", chefRoutes);
router.use("/auth", AuthRoutes)
router.use("/services", serviceRoutes);
router.use("/factures",factureRoutes);
router.use("/succursales",succursaleRoutes);
router.use("/techniciens", technicienRoutes);
router.use("/clients", ClientRoutes); 




export default router;
