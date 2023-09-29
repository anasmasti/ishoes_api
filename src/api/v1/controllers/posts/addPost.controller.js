import Post from "../../models/post.model.js";

export default async function addPost(req, res) {
  const post = new Post({
    title: req.body.title,
    img: req.body.img,
    short_title: req.body.short_title,
    desc: req.body.desc,
    short_desc: req.body.short_desc,
    season: req.body.season,
    new: req.body.new,
  });

  console.log(post);
  await post
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error creating.",
      });
    });
}
