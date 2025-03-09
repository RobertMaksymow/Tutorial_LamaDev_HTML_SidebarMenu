const darkMode = document.querySelector(".dark");
const nightMode = document.querySelector(".night");
const lightMode = document.querySelector(".light");
let sidebar = document.querySelector(".sidebar");
let activeListItem = document.querySelector(".list-item.active");

console.log(activeListItem);

darkMode.addEventListener("click", () => {
  sidebar.className = "sidebar";
  activeListItem = "list-item active";
});
nightMode.addEventListener("click", () => {
  sidebar.className = "sidebar night";
  activeListItem = "list-item active night";
});
lightMode.addEventListener("click", () => {
  sidebar.className = "sidebar light";
  activeListItem = "list-item active light";
});
