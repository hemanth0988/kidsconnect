import { renderLogin } from "./screens/login.js";
import { renderSignup } from "./screens/signup.js";

const routes = {
  login: renderLogin,
  signup: renderSignup,
};

export function goTo(routeName) {
  const fn = routes[routeName];
  if (!fn) {
    console.error("Unknown route:", routeName);
    return;
  }
  fn();
}
