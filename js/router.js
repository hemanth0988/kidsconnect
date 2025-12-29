import { renderLogin } from "./screens/login.js";
import { renderSignup } from "./screens/signup.js";
import { renderForgot } from "./screens/forgot.js";

const routes = {
  login: renderLogin,
  signup: renderSignup,
  forgot: renderForgot,
};

export function goTo(routeName) {
  const fn = routes[routeName];
  if (!fn) {
    console.error("Unknown route:", routeName);
    return;
  }
  fn();
}
