document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const headerButtons = document.querySelector(".header-buttons");
  const closeSidebar = document.querySelector(".close-sidebar");

  menuToggle.addEventListener("click", () => {
    headerButtons.classList.toggle("open");
  });

  closeSidebar.addEventListener("click", () => {
    headerButtons.classList.remove("open");
  });

  document.addEventListener("click", (e) => {
    if (!headerButtons.contains(e.target) && e.target !== menuToggle) {
      headerButtons.classList.remove("open");
    }
  });
});