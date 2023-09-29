import { Router } from "express";

import getPrivacyPolicy from "../controllers/privacy_policy/getPrivacyPolicy.controller.js";

const router = Router();

router.route("/privacy_policy").get(getPrivacyPolicy);

export default router;
