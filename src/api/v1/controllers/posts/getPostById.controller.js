import Post from "../../models/post.model.js";

export default async function getPostById(req, res) {
  await Post.findById(req.params.Id)
    .populate("season", "name -_id")
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Note not found with id " + req.params.Id,
        });
      }
      res.send(data);
    });
}
