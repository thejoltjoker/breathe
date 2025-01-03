const app = document.querySelector<HTMLDivElement>("#app")!;
const theme = localStorage.getItem("theme") ?? null;
if (localStorage.getItem("theme") == "dark-theme")
  document.body.classList.add("dark-theme");

app.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark-theme") ? "dark-theme" : ""
  );
});
