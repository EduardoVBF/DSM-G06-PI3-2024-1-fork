import { Router } from "express";
import controller from "../controllers/analista.js";

const router = Router();

router.post("/", controller.create);
router.get("/", controller.retrieveAll);
router.get("/email/:email", controller.retrieveOneEmail);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);


export default router;