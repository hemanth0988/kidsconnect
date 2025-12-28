export function renderLogin() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="screen login-screen">
      <h1>KidsConnect</h1>

      <button id="loginBtn" disabled>
        Continue
      </button>

      <p id="rulesHint">
        You must accept the Community Rules to continue.
      </p>
    </div>
  `;
}
