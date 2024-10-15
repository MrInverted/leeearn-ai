try {
  const buttons = document.querySelectorAll("[calendar-tabs]");
  const tables = document.querySelectorAll(".platform-calendar__table");

  const initAll = () => {
    if (buttons && tables) {
      buttons.forEach(item => item.classList.add("--disabled"));
      tables.forEach(item => item.style.display = "none");
    }
  }

  if (buttons && tables) {
    buttons.forEach((item, index) => {
      item.onclick = () => {
        initAll();
        buttons[index].classList.remove("--disabled");
        tables[index].style.display = "block";
      }
    })
  }
} catch (error) {
  console.warn(error)
}