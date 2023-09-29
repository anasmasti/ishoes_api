import PostRouter from "../../routes/posts.routes.js";
import SeasonRouter from "../../routes/seasons.routes.js";
import StartRouter from "../../routes/start.routes.js";
import PrivacyPolicyRouter from "../../routes/privacy_policy.routes.js";

export default function routesFacade() {
  return [StartRouter, PostRouter, SeasonRouter, PrivacyPolicyRouter];
}
