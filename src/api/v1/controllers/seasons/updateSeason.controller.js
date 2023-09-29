import Season from "../../models/season.model.js";

export default async function updateSeason(req, res) {
  if (!req.body.content) {
    return res.status(400).send({
      message: "content can't be empty",
    });
  }

  await Season.findByIdAndUpdate(
    req.params.Id,
    {
      name: req.body.name,
      img: req.body.img,
      desc: req.body.desc,
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
