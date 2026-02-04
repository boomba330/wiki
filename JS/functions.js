const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  
  sidebar.classList.toggle("hidden");

  
  if (sidebar.classList.contains("hidden")) {
    toggleBtn.textContent = ">"; 
  } else {
    toggleBtn.textContent = "<"; 
  }
});
