import Post from "../../models/post.model.js";

export default async function postCount(req, res) {
  const count = await Post.find().countDocuments();
  return res.send(JSON.stringify(count));
}
