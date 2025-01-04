const app = document.querySelector<HTMLDivElement>("#app")!;
const useDarkTheme = localStorage.getItem("theme") ?? null;
if (useDarkTheme == "dark-theme") document.body.classList.add("dark-theme");

app.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark-theme") ? "dark-theme" : ""
  );

  const isDark = document.body.classList.contains("dark-theme");
  document.documentElement.style.setProperty(
    "--status-bar-background",
    isDark ? "var(--dark)" : "var(--light)"
  );
});

document.documentElement.style.setProperty(
  "--status-bar-background",
  useDarkTheme === "dark-theme" ? "var(--dark)" : "var(--light)"
);
