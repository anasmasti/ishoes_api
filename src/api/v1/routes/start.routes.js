import { Router } from "express";

import start from "../controllers/start/start.controller.js";

const router = Router();

router.route("/start").post(start);

export default router;
