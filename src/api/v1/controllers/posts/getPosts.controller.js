import Post from "../../models/post.model.js";

export default async function getPosts(req, res) {
  await Post.find()
    .populate("season", "name -_id")
    .sort({ updatedAt: "desc" })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error retrieving.",
      });
    });
}
