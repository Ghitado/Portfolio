function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
window.addEventListener("scroll", function() {
  const nav = document.querySelector('.navbar')
  nav.classList.toggle("sticky", this.window.scrollY > 0)
})