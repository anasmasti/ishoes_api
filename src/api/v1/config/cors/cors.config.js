import cors from "cors";

export default function corsConfig(app) {
  app.use(
    cors({
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders:
        "Content-Type, X-Requested-With, Accept, Origin, Authorization",
    })
  );
}
