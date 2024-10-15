try {
  const tabs = document.querySelectorAll(".platform-student-tabs li");
  const panels = document.querySelectorAll(".pst");

  const initAll = () => {
    tabs.forEach(item => item.classList.remove("active"));
    panels.forEach(item => item.style.display = "none");
  }

  if (tabs && panels) panels.forEach((_, index) => {
    tabs[index].onclick = () => {
      initAll()
      tabs[index].classList.add("active");
      panels[index].style.display = "block";
    }
  })
} catch (error) {
  console.warn()
}