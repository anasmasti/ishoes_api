import Post from "../../models/post.model.js";

export default async function deletePost(req, res) {
  await Post.findByIdAndRemove(req.params.Id).then((data) => {
    if (!data) {
      return res.status(404).send({
        message: "Note not found with id " + req.params.Id,
      });
    }
    res.send({ message: "Note deleted successfully!" });
  });
}
