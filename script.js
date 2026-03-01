const ctaBtn = document.getElementById("ctaBtn");
const toast = document.getElementById("toast");
let toastTimeout;

ctaBtn?.addEventListener("click", () => {
  toast.textContent = "✅ Demo analysis queued. Welcome to SnapTrendo AI.";
  toast.classList.add("show");

  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
});
