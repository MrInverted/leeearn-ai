try {
  const filterTriggers = document.querySelectorAll(".platform-leads-table__head img");
  const filtersRow = document.querySelector("#table-filters");
  const filtersItself = document.querySelectorAll(".platform-leads-table__head-filters [filter]")

  if (filterTriggers) filterTriggers.forEach(item => item.onclick = onTriggerClick.bind(null, item))

  function onTriggerClick(item) {
    const activationId = item.getAttribute("activate-id");
    findCurrentFilter(activationId);
    toggleRowVisiblity();
  }

  function findCurrentFilter(id) {
    for (let filter of filtersItself) {
      if (filter.id === id) toggleFilterVisibility(filter);
    }
  }

  function toggleFilterVisibility(item) {
    if (!item) return;

    if (item.style.display === "none") {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  }

  function toggleRowVisiblity() {
    if (!filtersItself) return;

    const isAllHidden = Array.from(filtersItself).every(item => item.style.display === "none");

    if (isAllHidden) {
      filtersRow.style.display = "none";
    } else {
      filtersRow.style.display = "";
    }
  }
} catch (error) {
  console.warn(error)
}



try {
  const button = document.querySelector("#filter-statuses");
  const filterStatusesWrapper = document.querySelector("filter-statuses");
  const listContent = document.querySelectorAll("filter-statuses li span");

  const toggleBlocks = () => {
    button.classList.toggle("active");
    filterStatusesWrapper.classList.toggle("active");
  }

  if (button) button.onclick = () => toggleBlocks();

  if (listContent) listContent.forEach(item => {
    item.onclick = () => {
      const buttonText = button.querySelector("span");
      buttonText.textContent = item.textContent;
      toggleBlocks()
    }
  })
} catch (error) {
  console.warn(error)
}
