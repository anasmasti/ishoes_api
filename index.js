import express from "express";
import { config as envConfig } from "dotenv";
import routesConfig from "./src/api/v1/config/routes/routes.config.js";
import bdConfig from "./src/api/v1/config/db/db.config.js";
import corsConfig from "./src/api/v1/config/cors/cors.config.js";
import bodyParserConfig from "./src/api/v1/config/body_parser/bodyParser.config.js";

envConfig();

const app = express();
const port = process.env.PORT;

bodyParserConfig(app);
corsConfig(app);
bdConfig();
routesConfig(app);

app.listen(port, console.log("app run on port: " + port));
