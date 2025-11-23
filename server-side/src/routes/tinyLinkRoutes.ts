import { Router } from "express";
import tinyLinkController from "../controllers/tinyLinkController";
export const router = Router();

router.post("/createLink",tinyLinkController.createTinyLink);
router.get("/getLinks",tinyLinkController.getTinyLinks)
router.delete("/deleteLink",tinyLinkController.deleteTinyLink)
