// Dark Mode
const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const icon = themeToggle.querySelector("i");
const savedTheme = localStorage.getItem("theme");
const systemPrefersDark = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;
if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
  body.classList.add("dark-mode");
  icon.classList.replace("fa-moon", "fa-sun");
}
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    icon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "dark");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "light");
  }
});
/*
        // Animate elements on scroll
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.animate');
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (elementPosition < screenPosition) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };
        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);
*/
// Animate elements on scroll and on load
const animateElements = () => {
  const elements = document.querySelectorAll(".animate");
  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 0.7;
    if (elementPosition < screenPosition) {
      element.style.animation = "fadeIn 1s ease forwards";
      const delayClass = Array.from(element.classList).find((cls) =>
        cls.startsWith("delay-")
      );
      if (delayClass) {
        const delay = delayClass.split("-")[1] * 0.2;
        element.style.animationDelay = `${delay}s`;
      }
    }
  });
};
window.addEventListener("load", () => {
  setTimeout(animateElements, 100);
});
window.addEventListener("scroll", animateElements);
const currentDate = new Date().toLocaleDateString("ru-RU", {
  year: "numeric",
  month: "long",
  day: "numeric",
});
document.getElementById("currentDate").textContent = currentDate;
// Animate progress
document.querySelectorAll(".progress").forEach((bar) => {
  const width = bar.style.width;
  bar.style.width = "0";
  setTimeout(() => {
    bar.style.width = width;
  }, 500);
});
// Print
const printButton = document.createElement("button");
printButton.innerHTML = '<i class="fas fa-print"></i>';
printButton.style.position = "fixed";
printButton.style.bottom = "20px";
printButton.style.right = "20px";
printButton.style.padding = "15px";
printButton.style.background = "var(--primary-color)";
printButton.style.color = "white";
printButton.style.border = "none";
printButton.style.borderRadius = "50%";
printButton.style.cursor = "pointer";
printButton.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
printButton.style.zIndex = "100";
printButton.style.display = "flex";
printButton.style.alignItems = "center";
printButton.style.gap = "8px";
printButton.style.transition = "all 0.3s ease";
printButton.addEventListener("mouseenter", () => {
  printButton.style.transform = "translateY(-3px)";
  printButton.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.15)";
});
printButton.addEventListener("mouseleave", () => {
  printButton.style.transform = "translateY(0)";
  printButton.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
});
printButton.addEventListener("click", () => {
  window.print();
});
document.body.appendChild(printButton);
document.addEventListener("click", (e) => {
  if (!e.target.closest(".side-nav")) {
    document.querySelectorAll(".side-nav a").forEach((link) => {
      link.style.setProperty("--tooltip-opacity", "0");
      link.style.setProperty("--tooltip-visible", "hidden");
    });
  }
});
