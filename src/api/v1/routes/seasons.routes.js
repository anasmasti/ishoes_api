import { Router } from "express";

import getSeasons from "../controllers/seasons/getSeasons.controller.js";
import addSeason from "../controllers/seasons/addSeason.controller.js";

const router = Router();

router.route("/season").post(addSeason);
router.route("/seasons").get(getSeasons);

export default router;
