import Post from "../../models/post.model.js";

export default async function updatePost(req, res) {
  if (!req.body.content) {
    return res.status(400).send({
      message: "content can't be empty",
    });
  }
  await Post.findByIdAndUpdate(
    req.params.Id,
    {
      title: req.body.title,
      img: req.body.img,
      short_title: req.body.short_title,
      desc: req.body.desc,
      short_desc: req.body.short_desc,
      season: req.body.season,
      new: req.body.new,
    },
    { new: true }
  ).then((data) => {
    if (!data) {
      return res.status(404).send({
        message: "Note not found with id " + req.params.Id,
      });
    }
    res.send(data);
  });
}
