const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  if (window.innerWidth < 768) {
    // MOBILE: overlay
    sidebar.classList.toggle("show");
    document.body.classList.toggle("sidebar-open");
    toggleBtn.textContent = sidebar.classList.contains("show") ? "<" : ">";
  } else {
    // DESKTOP: push-aside
    sidebar.classList.toggle("hidden");
    toggleBtn.textContent = sidebar.classList.contains("hidden") ? ">" : "<";
  }
});

// Optional: close sidebar on mobile if overlay clicked
document.body.addEventListener("click", (e) => {
  if (
    window.innerWidth < 768 &&
    sidebar.classList.contains("show") &&
    !sidebar.contains(e.target) &&
    !toggleBtn.contains(e.target)
  ) {
    sidebar.classList.remove("show");
    document.body.classList.remove("sidebar-open");
    toggleBtn.textContent = ">";
  }
});