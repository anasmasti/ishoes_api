import Post from "../../models/post.model.js";

export default async function getPostBySeason(req, res) {
  await Post.find({ season: req.params.seasonid })
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
