try {
  const articles = document.querySelectorAll(" .course-accordion article");

  const closeAll = () => articles.forEach(item => item.classList.remove("opened"));

  articles.forEach((item) => {
    const title = item.querySelector("accordion-title");
    if (title) title.onclick = () => {
      if (item.classList.contains("opened")) {
        closeAll();
      } else {
        closeAll();
        item.classList.add("opened");
      }
    }
  })
} catch (error) {
  console.warn(error)
}