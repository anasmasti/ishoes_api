import { Router } from "express";

import getPosts from "../controllers/posts/getPosts.controller.js";
import addPost from "../controllers/posts/addPost.controller.js";
import getPostById from "../controllers/posts/getPostById.controller.js";

const router = Router();

router.route("/post").post(addPost);
router.route("/posts").get(getPosts);
router.route("/post/:id").get(getPostById);

export default router;
