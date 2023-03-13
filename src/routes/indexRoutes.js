import { Router } from "express";
import { createCelulares, deleteCelulares, renderCelulares, renderEditCelular, updateCelulares } from "../controllers/celularController";
import Celulares from "../models/Celulares";


const router = Router();

router.get("/",renderCelulares );

router.get("/celulares/agregar", async (req, res) => {
    const celulares = await Celulares.find().lean();
    res.render("agregarCelulares", { celulares : celulares });
  });

router.post("/celulares/agregar", createCelulares);

router.get("/celulares/:id/updateCelulares", renderEditCelular);

router.post("/celulares/:id/updateCelulares", updateCelulares);

router.get("/celulares/:id/deleteCelulares", deleteCelulares);

export default router;