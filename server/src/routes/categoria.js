import { Router } from "express";
import controller from "../controllers/categoria.js";

const router = Router();

router.post("/", controller.create);
router.get("/", controller.retrieveAll);
router.get("/:id", controller.retrieveOneId);
router.put("/:id", controller.update);


export default router;