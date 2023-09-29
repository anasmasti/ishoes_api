import mongoose from "mongoose";

export default function bdConfig() {
  return runDbConnexion()
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));
}

async function runDbConnexion() {
  await mongoose.connect("mongodb://localhost:27017/ishoes", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
