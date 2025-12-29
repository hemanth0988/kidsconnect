import { goTo } from "../router.js";

export function renderSignup() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="screen signup-screen">
      <div class="topbar">
        <button class="link" id="backBtn" type="button">Back</button>
        <div class="topbar-title">Create Account</div>
        <div style="width:48px;"></div>
      </div>

      <div class="content">
        <div class="field">
          <label for="pname">Parent name</label>
          <input id="pname" type="text" placeholder="Full name" />
        </div>

        <div class="field">
          <label for="phone">Phone number</label>
          <input id="phone" type="tel" inputmode="tel" placeholder="+971 5X XXX XXXX" />
        </div>

        <div class="field">
          <label for="email">Email (optional)</label>
          <input id="email" type="email" placeholder="name@email.com" />
        </div>

        <div class="field">
          <label for="pw">Create password</label>
          <input id="pw" type="password" placeholder="Password" />
        </div>

        <button id="createBtn">Create account</button>
        <p class="hint">Prototype only: this will open an OTP overlay.</p>
      </div>
    </div>

    <!-- OTP Overlay -->
    <div class="overlay" id="otpOverlay" aria-hidden="true">
      <div class="overlay-card">
        <h2>Verify OTP</h2>
        <p class="sub">Enter the 6-digit code sent to your phone.</p>

        <div class="field">
          <label for="otp">OTP</label>
          <input id="otp" type="text" inputmode="numeric" maxlength="6" placeholder="••••••" />
        </div>

        <button id="verifyBtn">Verify</button>

        <div class="overlay-actions">
          <button class="link" id="resendBtn" type="button">Resend code</button>
          <button class="link" id="cancelOtpBtn" type="button">Cancel</button>
        </div>
      </div>
    </div>
  `;

  document.getElementById("backBtn").addEventListener("click", () => goTo("login"));

  const otpOverlay = document.getElementById("otpOverlay");

  document.getElementById("createBtn").addEventListener("click", () => {
    otpOverlay.classList.add("show");
    otpOverlay.setAttribute("aria-hidden", "false");
    document.getElementById("otp").focus();
  });

  document.getElementById("cancelOtpBtn").addEventListener("click", () => {
    otpOverlay.classList.remove("show");
    otpOverlay.setAttribute("aria-hidden", "true");
  });

  document.getElementById("verifyBtn").addEventListener("click", () => {
    // Prototype behavior: close overlay and return to login
    otpOverlay.classList.remove("show");
    otpOverlay.setAttribute("aria-hidden", "true");
    alert("Account created (prototype). Returning to Login.");
    goTo("login");
  });

  document.getElementById("resendBtn").addEventListener("click", () => {
    alert("OTP resent (prototype).");
  });
}
