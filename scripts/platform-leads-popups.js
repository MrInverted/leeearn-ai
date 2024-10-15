try {
  const makeLeadTrigger = document.querySelector("#make-lead-trigger");
  const makeLeadPopup = document.querySelector("#popup-make-lead");
  const popupsDiv = document.querySelector(".popups");

  if (makeLeadTrigger && makeLeadPopup) makeLeadTrigger.onclick = () => {
    popupsDiv.style.display = "";
    makeLeadPopup.style.display = "";
  }
} catch (error) {
  console.warn(error);
}