export function renderLogin() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="screen login-screen">
      <h1>KidsConnect</h1>

      <div class="field">
        <label for="phone">Phone number</label>
        <input id="phone" type="tel" inputmode="tel" placeholder="+971 5X XXX XXXX" />
      </div>

      <div class="field">
        <label for="password">Password</label>
        <input id="password" type="password" placeholder="Enter password" />
      </div>

      <div class="login-links">
        <button class="link" id="forgotBtn" type="button">Forgot password?</button>
      </div>

      <label class="rules-check">
        <input type="checkbox" id="rulesChk" />
        <span>I agree to the Community Rules</span>
      </label>

      <button id="loginBtn" disabled>Login</button>
      <p id="rulesHint" class="hint">You must accept the Community Rules to continue.</p>

      <div class="footer">
        <span>New here?</span>
        <button class="link" id="signupBtn" type="button">Create account</button>
      </div>
    </div>
  `;

  const chk = document.getElementById("rulesChk");
  const btn = document.getElementById("loginBtn");
  const hint = document.getElementById("rulesHint");

  // Gate login only by rules for now (prototype)
  chk.addEventListener("change", () => {
    btn.disabled = !chk.checked;
    hint.style.display = chk.checked ? "none" : "block";
  });

  // Placeholder navigation (we'll wire router next)
  document.getElementById("signupBtn").addEventListener("click", () => {
    alert("Signup screen next (prototype).");
  });

  document.getElementById("forgotBtn").addEventListener("click", () => {
    alert("Forgot password flow next (prototype).");
  });

  btn.addEventListener("click", () => {
    alert("Login (prototype) — next we route to Create Account / Parent Profile.");
  });
}
