import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SeasonSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Season = mongoose.model("Season", SeasonSchema);

export default Season;
