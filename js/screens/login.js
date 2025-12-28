export function renderLogin() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="screen login-screen">
      <h1>KidsConnect</h1>

      <label class="rules-check">
        <input type="checkbox" id="rulesChk" />
        <span>I agree to the Community Rules</span>
      </label>

      <button id="loginBtn" disabled>Continue</button>

      <p id="rulesHint" class="hint">
        You must accept the Community Rules to continue.
      </p>
    </div>
  `;

  const chk = document.getElementById("rulesChk");
  const btn = document.getElementById("loginBtn");
  const hint = document.getElementById("rulesHint");

  chk.addEventListener("change", () => {
    btn.disabled = !chk.checked;
    hint.style.display = chk.checked ? "none" : "block";
  });
}
