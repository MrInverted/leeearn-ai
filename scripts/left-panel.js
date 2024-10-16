try {
  const items = document.querySelectorAll(".left-panel__nav-item.--with-accordion");

  items.forEach(item => {
    const title = item.querySelector(".left-panel__nav-title.--with-chevron");
    title.onclick = () => item.classList.toggle("open");
  })
} catch (error) {
  console.warn(error)
}

try {
  const trigger = document.querySelector(".left-panel__trigger");
  const panel = document.querySelector(".left-panel");

  if (trigger) trigger.onclick = () => {
    panel.classList.toggle("active");
  }
} catch (error) {
  console.warn(error)
}