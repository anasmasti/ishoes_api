import routesFacade from "../../helper/facades/routesFacade.facade.js";

export default function routesConfig(app) {
  routesFacade().forEach((route) => {
    return app.use("/api/v1/", [route]);
  });
}
