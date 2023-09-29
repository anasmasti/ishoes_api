import Season from "../../models/season.model.js";

export default async function addSeason(req, res) {
  const season = new Season({
    name: req.body.name,
    img: req.body.img,
    desc: req.body.desc,
  });
  await season
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
