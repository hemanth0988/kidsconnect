import { goTo } from "../router.js";

export function renderForgot() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="screen forgot-screen">
      <div class="topbar">
        <button class="link" id="backBtn" type="button">Back</button>
        <div class="topbar-title">Forgot Password</div>
        <div style="width:48px;"></div>
      </div>

      <div class="content">
        <div class="field">
          <label for="phone">Phone number</label>
          <input id="phone" type="tel" inputmode="tel" placeholder="+971 5X XXX XXXX" />
        </div>

        <button id="sendOtpBtn">Send OTP</button>
        <p class="hint">Prototype only: opens OTP overlay.</p>
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

        <div class="field">
          <label for="newpw">New password</label>
          <input id="newpw" type="password" placeholder="Create new password" />
        </div>

        <button id="resetBtn">Reset password</button>

        <div class="overlay-actions">
          <button class="link" id="resendBtn" type="button">Resend code</button>
          <button class="link" id="cancelBtn" type="button">Cancel</button>
        </div>
      </div>
    </div>
  `;

  document.getElementById("backBtn").addEventListener("click", () => goTo("login"));

  const overlay = document.getElementById("otpOverlay");

  document.getElementById("sendOtpBtn").addEventListener("click", () => {
    overlay.classList.add("show");
    overlay.setAttribute("aria-hidden", "false");
    document.getElementById("otp").focus();
  });

  document.getElementById("cancelBtn").addEventListener("click", () => {
    overlay.classList.remove("show");
    overlay.setAttribute("aria-hidden", "true");
  });

  document.getElementById("resendBtn").addEventListener("click", () => {
    alert("OTP resent (prototype).");
  });

  document.getElementById("resetBtn").addEventListener("click", () => {
    overlay.classList.remove("show");
    overlay.setAttribute("aria-hidden", "true");
    alert("Password reset (prototype). Returning to Login.");
    goTo("login");
  });
}
