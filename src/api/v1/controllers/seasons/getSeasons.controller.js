import Season from "../../models/season.model.js";

export default async function getSeasons(req, res) {
  await Season.find()
    .populate("product", "name -_id")
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error retrieving.",
      });
    });
}
