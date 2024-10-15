try {
  const wrapper = document.querySelector(".platform-header__languages");
  const selected = document.querySelector(".platform-header__languages-selected");
  const items = document.querySelectorAll(".platform-header__languages-all li");

  selected.onclick = () => wrapper.classList.toggle("opened");

  items.forEach(item => {
    item.onclick = () => {
      [selected.textContent, item.textContent] = [item.textContent, selected.textContent];
      wrapper.classList.remove("opened");
    }
  })
} catch (error) {
  console.warn(error)
}