import Season from "../../models/season.model.js";

export default async function deleteSeason(req, res) {
  await Season.findByIdAndRemove(req.params.Id).then((data) => {
    if (!data) {
      return res.status(404).send({
        message: "Note not found with id " + req.params.Id,
      });
    }
    res.send({ message: "Note deleted successfully!" });
  });
}
