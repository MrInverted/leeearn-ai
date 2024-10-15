try {
  const filterTriggers = document.querySelectorAll(".button-filter-trigger");
  const filterMenus = document.querySelectorAll(".courses-arrangers__filters");

  filterTriggers.forEach((item, index) => {
    item.onclick = () => {
      filterTriggers[index].classList.toggle("active");
      filterMenus[index].classList.toggle("active");
    }
  })

  const sortTriggers = document.querySelectorAll(".button-sort-trigger");
  const sortMenus = document.querySelectorAll(".courses-arrangers__sorters");

  sortTriggers.forEach((item, index) => {
    item.onclick = () => {
      sortTriggers[index].classList.toggle("active");
      sortMenus[index].classList.toggle("active");
    }
  })
} catch (error) {
  console.warn(error)
}


try {
  const tabs = document.querySelectorAll(".course-tab-trigger");
  const panels = document.querySelectorAll(".courses-content-panel");

  const closeAll = () => {
    tabs.forEach(item => item.classList.remove("active"));
    panels.forEach(item => item.classList.remove("active"));
  }

  tabs.forEach((item, index) => {
    item.onclick = () => {
      closeAll();
      tabs[index].classList.add("active");
      panels[index].classList.add("active");
    }
  })
} catch (error) {
  console.warn(error);
}